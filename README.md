<h1 align="center">vue3-basic-admin</h1>

![GitHub license](https://img.shields.io/github/license/biubiubiu01/vue3-basic-admin?style=flat)
![GitHub stars](https://img.shields.io/github/stars/biubiubiu01/vue3-basic-admin?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/biubiubiu01/vue3-basic-admin?style=flat)

<p align="center">
    <a href="https://github.com/biubiubiu01/vue3-basic-admin"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="http://gist006.gitee.io/vue3-basic-admin/">在线预览</a>
    ·
    <a href="https://github.com/biubiubiu01/vue3-basic-admin/issues">提出Bug</a>
    ·
    <a href="https://github.com/biubiubiu01/vue3-basic-admin/issues">提出建议</a>
  </p>

## 简介

`vue3-basic-admin` 是一款开源开箱即用的中后台管理系统。基于 `Vue3`、`Vite`、`Element-Plus`、`TypeScript`、`Pinia` 等主流技术开发，内置许多开箱即用的组件，能快速构建中后台管理系统，目前决定完全开源，如果觉得该项目对你有所帮助，可以点一个 star,如果有一定的经济能力，可以请作者喝一杯咖啡，开源不易！

## 测试账号

```

1.  用户名：admin  密码 任意  拥有admin的权限可以查看所有页面
2.  用户名：test   密码 任意  拥有test的页面权限，可以查看部分页面
3.  用户名：editor 密码 任意  拥有editor的页面权限，可以查看富文本等页面

```

vue2 版本，地址：[vue-antd-admin](https://github.com/biubiubiu01/vue-antd-admin)

精简版 ，地址：[vue3-basic-template](https://github.com/biubiubiu01/vue3-basic-template)

## 预览

-   [点我预览](https://gist006.gitee.io/vue3-basic-admin)
<p align="center">
  <img width="100%" src="https://i.328888.xyz/2023/02/28/zxhk5.png">
  <img width="100%" src="https://i.328888.xyz/2023/02/28/zxGay.png">
</p>

-   暗黑模式
<p align="center">
  <img  width="100%" src="https://i.328888.xyz/2023/02/28/zxSJZ.png">
  <img  width="100%" src="https://i.328888.xyz/2023/02/28/zx5B8.png">
</p>

## 架构清单

-   Vue3
-   Vue-router
-   Pinia
-   Typescript
-   Vite
-   Axios
-   模拟接口：mockjs
-   代码检测和格式化：eslint+prettier
-   git 提交格式化：husky+lint-staged
-   代码日志规范：@commitlint/cli+@commitlint/config-conventional
-   ...其他

## 功能

-   Axios 集成
    如果对该模块不太懂，可以看： [vue3 之 axios 封装集成](https://juejin.cn/post/7203601905938579517)

```
- loading
- 错误日志收集
- 错误重试机制
- 取消重复请求
```

-   白天和暗黑模式切换
-   动态权限路由
-   内置用户管理+角色管理+部门管理+字典管理等
-   内置错误日志，登录日志，操作日志收集
-   table 页面模板内置，快速开发 table，开箱即用
-   常用组件 input,select,table,form,loading,filter 等组件封装集成
-   echarts 内置各种模板，开箱即用
-   富文本
-   Markdown
-   错误页面 403 404 500 等
-   等等其他功能。

### 文件目录说明

```
├── build                            ---vite打包配置
├── mock                             ---mock模拟数据
├── public                           ---静态资源文件
├── src
│  ├── api                           ---接口
│  ├── assets                        ---图片
│  ├── components                    ---可复用的vue组件
│  ├── constant                      ---常量
│  ├── directive
│  ├── enums
│  ├── hooks
│  ├── icons
│  ├── layouts                       ---布局方式
│  ├── plugins
│  ├── router                        ---路由
│  ├── store                         ---vuex
│  ├── styles                        ---sass样式
│  ├── utils                         ---方法函数
│  ├── views                         ---页面
│  ├── App.vue
│  ├── main.ts
├── types
├── .env
├── .env.development
├── .env.production
├── .eslintrc.js
├── .prettierrc.cjs
├── commitlint.config.cjs           ---代码提交日志规范
├──  package.json
├──  package-lock.json
├──  README.md
└──  vite.config.ts                 ---vite的配置


```

## 精简版

逻辑抽离中，如有需要可联系作者获得。

## 文档

目前尚未搭建文档，如后期有需要可构建

## 安装

```
# 克隆项目
git clone https://github.com/biubiubiu01/vue3-basic-admin.git
# 进入项目目录
cd vue3-basic-admin
# 安装依赖
pnpm install
# 本地开发 启动项目
pnpm start
```

### 部署

```
# 打包项目
npm run build

# 打包大小分析
npm run report

# 预览
npm run preview
```

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器, 不支持 `IE`

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                             not support                                                                                              |                                                                                            last 2 versions                                                                                             |                                                                                                  last 2 versions                                                                                                  |                                                                                                last 2 versions                                                                                                |                                                                                                last 2 versions                                                                                                |

## 最后

开源不易，若觉得这个项目对你有用，可以点个[star](https://github.com/biubiubiu01/vue3-basic-admin)，欢迎提出建议和 bug :smile: 。

## 支持

开源不易，若觉得这个项目对你有用，可以点个[star](https://github.com/biubiubiu01/vue3-basic-admin)，欢迎提出建议和 bug :smile: 。如果这个项目对你有所帮助，可以给作者买杯咖啡，欢迎投喂，任意金额捐赠加好友问题咨询。

<img src="https://i.328888.xyz/2023/02/28/zV27Q.jpeg" alt="alipay" width="250"><img src="https://i.328888.xyz/2023/02/28/zVw2H.jpeg" alt="wechat" width="250">
