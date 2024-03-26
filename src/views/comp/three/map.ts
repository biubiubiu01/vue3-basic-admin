// @ts-nocheck
import * as THREE from "three";
import * as d3 from "d3";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GUI } from "three/examples/jsm/libs/lil-gui.module.min.js";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { useEnv } from "@/hooks/useEnv";

const { MODE } = useEnv();

export default class ThreeMap {
    dom: HTMLDivElement;
    toolTip: HTMLDivElement | null = null;
    scene: THREE.Scene | null = null;
    camera: THREE.PerspectiveCamera | null = null;
    renderer: THREE.WebGLRenderer | null = null;
    labelRender: CSS2DRenderer | null = null;
    map: THREE.Object3D | null = null;
    controls: OrbitControls | null = null;
    projection: any = d3.geoMercator().center([106.557691, 29.559296]).translate([0, 0]);
    gui: GUI | null = null;
    action: any[] = [];
    lastMesh: any = null;
    defaultPoint: any = {
        x: 0,
        y: -53.2,
        z: 52.4
    };

    constructor(dom: HTMLDivElement, action: any[]) {
        this.dom = dom;
        this.action = action;
        this.init();
    }

    async init() {
        this.scene = new THREE.Scene();
        this.setCamera();
        this.setRenderer();
        this.setLight();
        this.setController();
        if (MODE === "development") {
            this.addHelper();
            this.addGUI();
        }
        this.setResize();
        this.animate();
    }

    setCamera() {
        this.camera = new THREE.PerspectiveCamera(75, this.dom.offsetWidth / this.dom.offsetHeight, 0.01, 1000);
        this.camera.position.set(this.defaultPoint.x, this.defaultPoint.y, this.defaultPoint.z);
        this.camera.lookAt(this.scene!.position);
    }

    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(this.dom.offsetWidth, this.dom.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.dom.appendChild(this.renderer.domElement);

        this.labelRender = new CSS2DRenderer();
        this.labelRender.setSize(this.dom.offsetWidth, this.dom.offsetHeight);
        this.labelRender.domElement.style.position = "absolute";
        this.labelRender.domElement.style.top = "0px";
        this.labelRender.domElement.style.left = "0px";
        this.labelRender.domElement.style.pointerEvents = "none";
        this.dom.appendChild(this.labelRender.domElement);
    }

    setLight() {
        const ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene!.add(ambientLight);
    }

    render() {
        this.renderer!.render(this.scene, this.camera);
        this.labelRender!.render(this.scene, this.camera);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.controls?.update();
        this.render();
    }

    renderMap(json: any) {
        this.map?.clear?.();
        if (this.toolTip) {
            this.toolTip.style.display = "none";
        }
        this.initMap(json);
        this.setToolTip();
        this.setRaycaster();
    }

    initMap(json: any) {
        this.map = new THREE.Object3D();
        json.features.forEach((feature: any) => {
            const province = new THREE.Object3D();
            const label = this.createLabel(feature);

            const { coordinates, type } = feature.geometry;

            coordinates.forEach((coordinate: any) => {
                const fn = (coordinateItem: any) => {
                    const { mesh, line } = this.createCube(coordinateItem);
                    province.properties = feature.properties;
                    province.add(mesh);
                    province.add(line);
                };
                if (type === "MultiPolygon") coordinate.forEach((item: any) => fn(item));
                else if (type === "Polygon") fn(coordinate);
            });
            this.map?.add(province);
            this.map?.add(label);
        });
        this.scene?.add(this.map);
    }

    createCube(coordinate: any) {
        const points: any[] = [];
        const shape = new THREE.Shape();

        coordinate.forEach((polygon: any, index: number) => {
            if (polygon) {
                const [x, y] = this.projection(polygon);
                if (index === 0) shape.moveTo(x, -y);
                else shape.lineTo(x, -y);
                points.push(new THREE.Vector3(x, -y, 5));
            }
        });

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterail = new THREE.LineBasicMaterial({ color: 0xffffff });

        const geometry = new THREE.ExtrudeGeometry(shape, {
            depth: 5,
            bevelEnabled: false
        });
        const material = new THREE.MeshBasicMaterial({ color: 0x00d8fd, transparent: true, opacity: 0.8 });
        const material2 = new THREE.MeshBasicMaterial({ color: 0x3480c4, transparent: true, opacity: 0.4 });
        const mesh = new THREE.Mesh(geometry, [material, material2]);
        const line = new THREE.Line(lineGeometry, lineMaterail);

        return {
            mesh,
            line
        };
    }

    createLabel(feature: any) {
        const div = document.createElement("div");
        div.style.color = "#fff";
        div.style.fontSize = "12px";
        div.style.textShadow = "1px 1px 2px #047cd6";
        div.textContent = feature.properties.name;
        const label = new CSS2DObject(div);
        label.scale.set(0.01, 0.01, 0.01);

        const [x, y] = this.projection(feature.properties.centroid || feature.properties.center || [0, 0]);
        label.position.set(x, -y, 5);
        return label;
    }

    getBoxInfo(mesh) {
        // 创建一个包围盒
        const box3 = new THREE.Box3();
        // 添加包围盒对象
        box3.expandByObject(mesh);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        // 通过box3提供的api获取到center和size
        box3.getCenter(center);
        box3.getSize(size);
        return {
            size,
            center
        };
    }

    setToolTip() {
        const div = document.createElement("div");
        div.style.color = "#fff";
        div.style.fontSize = "12px";
        div.style.textShadow = "1px 1px 2px #047cd6";
        div.style.position = "absolute";
        div.style.padding = "4px 8px";
        div.style.zIndex = "1000";
        div.style.background = "rgba(0,0,0,0.4)";
        div.style.borderRadius = "4px";
        div.style.transition = "all 0.2s";
        this.toolTip = div;
        this.dom.appendChild(div);
    }

    setRaycaster() {
        let lastChoose = null;

        const onMouseMove = (e: any) => {
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            mouse.x = (e.offsetX / this.dom.offsetWidth) * 2 - 1;
            mouse.y = -(e.offsetY / this.dom.offsetHeight) * 2 + 1;

            this.toolTip.style.left = e.offsetX + 15 + "px";
            this.toolTip.style.top = e.offsetY + 15 + "px";

            raycaster.setFromCamera(mouse, this.camera);

            const intersects = raycaster.intersectObjects(this.scene!.children, true);

            if (lastChoose) {
                this.toolTip.style.transition = "unset";
                this.toolTip.style.display = "none";
                lastChoose.object.material[0].color.set(0x00d8fd);
                lastChoose.object.material[1].color.set(0x3480c4);
            }
            lastChoose = intersects.find((item) => item.object.material && item.object.material.length === 2);
            if (lastChoose) {
                lastChoose.object.material[0].color.set(0x376edf);
                lastChoose.object.material[1].color.set(0x376edf);
                this.toolTip.textContent = lastChoose.object.parent.properties.name;
                this.toolTip.style.display = "block";
                this.toolTip.style.transition = "all 0.2s";
            }
        };

        const onClick = (e: any) => {
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();
            mouse.x = (e.offsetX / this.dom.offsetWidth) * 2 - 1;
            mouse.y = -(e.offsetY / this.dom.offsetHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, this.camera);

            const intersects = raycaster.intersectObjects(this.scene!.children, true);

            const findItem = intersects.find((item) => item.object.material && item.object.material.length === 2);
            if (findItem) {
                this.projection = d3.geoMercator().center(findItem.object.parent.properties.center).translate([0, 0]);
                const findAction = this.action.find((item) => item.type === "click");
                if (findAction) {
                    findAction?.callFunction?.(findItem.object.parent.properties);
                }
            }
        };

        this.dom.addEventListener("mousemove", onMouseMove);

        this.dom.addEventListener("click", onClick);
    }

    addHelper() {
        const cameraHelper = new THREE.CameraHelper(this.camera);
        const axesHelper = new THREE.AxesHelper(100);
        this.scene!.add(cameraHelper);
        this.scene!.add(axesHelper);
    }

    addGUI() {
        this.gui = new GUI();
        this.gui.domElement.style.position = "absolute";
        this.gui.domElement.style.right = "20px";
        this.gui.domElement.style.top = "100px";

        const onChange = () => {
            this.camera?.position.set(this.defaultPoint.x, this.defaultPoint.y, this.defaultPoint.z);
        };

        this.gui.add(this.defaultPoint, "x", -100, 100).onChange(onChange);
        this.gui.add(this.defaultPoint, "y", -100, 100).onChange(onChange);
        this.gui.add(this.defaultPoint, "z", -100, 100).onChange(onChange);
    }

    setController() {
        this.controls = new OrbitControls(this.camera, this.renderer!.domElement);
    }

    setResize() {
        window.addEventListener("resize", () => {
            this.camera.aspect = this.dom.offsetWidth / this.dom.offsetHeight;
            this.camera.updateProjectionMatrix();
            this.renderer!.setSize(this.dom.offsetWidth, this.dom.offsetHeight);
            this.labelRender!.setSize(this.dom.offsetWidth, this.dom.offsetHeight);
        });
    }
}
