import type { Plugin } from "vite";
// @ts-ignore
import { compileScript, parse } from "@vue/compiler-sfc";

export function setupName(): Plugin {
    return {
        name: "vite:setupName",
        enforce: "pre",
        transform(code, id) {
            if (/\.vue$/.test(id) || /\.vue\?.*type=script.*/.test(id)) {
                const { descriptor } = parse(code);
                if (!descriptor.script && descriptor.scriptSetup && !descriptor.scriptSetup.attrs?.extendIgnore) {
                    const result = compileScript(descriptor, { id });
                    const name = result.attrs.name;
                    const lang = result.attrs.lang;
                    const inheritAttrs = result.attrs.inheritAttrs;
                    if (name || inheritAttrs) {
                        const template = `<script${lang ? ` lang="${lang}"` : ""}>
                        import { defineComponent } from 'vue'
                        export default defineComponent({
                          ${name ? `name: "${name}",` : ""}
                          ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== "false"},` : ""}
                        })
                        </script>\n`;
                        code += template;
                    }
                }
            }
            return code;
        }
    };
}
