title: 新一代打包工具 Vite 的工程化实践与团队愿景
speaker: vadxq

<slide class="bg-black-blue aligncenter" image="https://qnimg.vadxq.com/ppt/2019/bridge-4456255_1280.webp .dark">

# 新一代打包工具 Vite 的工程化实践与团队愿景 {.text-landing.text-shadow}

---

###### 业务支撑是活在当下，技术基建是活好未来

---

By vadxq {.text-intro.animated.fadeInUp.delay-500}

[:fa-github: Github](https://github.com/vadxq/nodeppt-set){.button.ghost}

<slide class="bg-black-blue aligncenter" >

# Vite 是什么？

<slide class="bg-black-blue aligncenter" >

# 下一代前端开发与构建工具

---

- #### 快速冷启动服务器：极速的服务启动，使用原生 ESM 文件，无需打包
- #### 即时热模块更换（HMR）：无论应用程序大小如何，都始终极快的模块热重载
- #### 真正的按需编译
- #### 丰富的功能：支持 TypeScript，JSX，CSS 等开箱即用
- #### 通用的插件：在开发和构建之间共享 Rollup-superset 插件接口

<slide class="bg-black-blue aligncenter" >

# 原理

---

- #### Esbuild：An extremely fast JavaScript bundler

- #### 基于浏览器原生 ES imports 的开发服务器
- #### 利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用
- #### 同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢
- #### 针对生产环境则可以把同一份代码用 rollup 打包

<slide class="bg-black-blue aligncenter" >

# 工作流程

<slide class="bg-black-blue aligncenter" >

# Javascript 模块需求

---

<div style="background: #fff;">
```html
// 声明
<script type="module" src="main.js"></script>
```
</div>

---

#### 当 script.type 为 module 时，通过 src 及 import 导入的文件会发送 http 请求

<slide class="bg-black-blue aligncenter" >

# 拦截请求

---

<div style="background: #fff;">
```javascript
import Vue from 'vue'
```
</div>

---

#### 当通过 import 试图导入 node_modules 内的文件时，Vite 会对路径进行替换，因为在浏览器中只有 相对路径 和 绝对路径。

---

<div style="background: #fff;">
```javascript
import Vue from '/@modules/vue'
```
</div>
---

<slide class="bg-black-blue aligncenter fullscreen" >

# 解析 /@modules

---

<div style="background: #fff;">
```json
{
  "license": "MIT",
  "main": "index.js",
  "module": "dist/vue.runtime.esm-bundler.js",
  "name": "vue",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/vuejs/vue-next.git"
  },
  "types": "dist/vue.d.ts",
  "unpkg": "dist/vue.global.js",
  "version": "3.0.5"
}
```
</div>

<slide class="bg-black-blue aligncenter" >

# 解析单文件组件

#### 项目代码打包实体演示

---

- #### 处理 script/template/style

- #### .vue 和 TSX 写法的解析区别

<slide class="bg-black-blue aligncenter" >

# Vite 与其他构建工具的对比

---

<figure class="bench" style="position:relative;height:130px;font-size:13px;line-height:20px;"><div style="position:absolute;left:180px;top:0;right:0;height:100px;"><div style="position:absolute;left:0.00%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:15.55%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:31.10%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:46.65%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:62.20%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:77.75%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:93.30%;top:0;width:1px;bottom:0;background:rgba(127,127,127,0.25);"></div><div style="position:absolute;left:0;top:3px;width:0.58%;height:14px;background:rgba(191,191,191,0.2);"></div><div style="position:absolute;left:0;top:3px;width:0.58%;height:14px;background:#FFCF00;" class="bench0-bar0"></div><div style="position:absolute;right:100%;top:0px;width:190px;height:20px;text-align:right;white-space:nowrap;margin-right:8px;font-weight:bold;"><a href="https://github.com/evanw/esbuild">esbuild</a></div><div style="position:absolute;left:0.58%;top:0px;height:20px;margin-left:8px;font-weight:bold;">0.37s</div><div style="position:absolute;left:0;top:23px;width:58.76%;height:14px;background:rgba(191,191,191,0.2);"></div><div style="position:absolute;left:0;top:23px;width:58.76%;height:14px;background:#FFCF00;" class="bench0-bar1"></div><div style="position:absolute;right:100%;top:20px;width:190px;height:20px;text-align:right;white-space:nowrap;margin-right:8px;"><a href="https://github.com/rollup/rollup">rollup</a> + <a href="https://github.com/terser/terser">terser</a></div><div style="position:absolute;left:58.76%;top:20px;height:20px;margin-left:8px;">37.79s</div><div style="position:absolute;left:0;top:43px;width:61.08%;height:14px;background:rgba(191,191,191,0.2);"></div><div style="position:absolute;left:0;top:43px;width:61.08%;height:14px;background:#FFCF00;" class="bench0-bar2"></div><div style="position:absolute;right:100%;top:40px;width:190px;height:20px;text-align:right;white-space:nowrap;margin-right:8px;"><a href="https://github.com/parcel-bundler/parcel">parcel</a> 2</div><div style="position:absolute;left:61.08%;top:40px;height:20px;margin-left:8px;">39.28s</div><div style="position:absolute;left:0;top:63px;width:66.98%;height:14px;background:rgba(191,191,191,0.2);"></div><div style="position:absolute;left:0;top:63px;width:66.98%;height:14px;background:#FFCF00;" class="bench0-bar3"></div><div style="position:absolute;right:100%;top:60px;width:190px;height:20px;text-align:right;white-space:nowrap;margin-right:8px;"><a href="https://github.com/webpack/webpack">webpack</a> 4</div><div style="position:absolute;left:66.98%;top:60px;height:20px;margin-left:8px;">43.07s</div><div style="position:absolute;left:0;top:83px;width:85.92%;height:14px;background:rgba(191,191,191,0.2);"></div><div style="position:absolute;left:0;top:83px;width:85.92%;height:14px;background:#FFCF00;" class="bench0-bar4"></div><div style="position:absolute;right:100%;top:80px;width:190px;height:20px;text-align:right;white-space:nowrap;margin-right:8px;"><a href="https://github.com/webpack/webpack">webpack</a> 5</div><div style="position:absolute;left:85.92%;top:80px;height:20px;margin-left:8px;">55.25s</div><div style="position:absolute;left:0.00%;top:104px;width:50px;margin-left:-25px;text-align:center;">0s</div><div style="position:absolute;left:15.55%;top:104px;width:50px;margin-left:-25px;text-align:center;">10s</div><div style="position:absolute;left:31.10%;top:104px;width:50px;margin-left:-25px;text-align:center;">20s</div><div style="position:absolute;left:46.65%;top:104px;width:50px;margin-left:-25px;text-align:center;">30s</div><div style="position:absolute;left:62.20%;top:104px;width:50px;margin-left:-25px;text-align:center;">40s</div><div style="position:absolute;left:77.75%;top:104px;width:50px;margin-left:-25px;text-align:center;">50s</div><div style="position:absolute;left:93.30%;top:104px;width:50px;margin-left:-25px;text-align:center;">60s</div><div id="bench0-progress" class="progress" style="position: absolute; top: 104px; width: 50px; margin-left: -25px; text-align: center; display: none;">55s</div></div><script>(function(){var e=document.getElementById("bench0-progress"),n,t,a=function(){t||(t=e.getAnimations()[0]),t&&(e.textContent=Math.floor(t.timeline.currentTime/1e3)+"s",t.playState==="finished"&&(clearInterval(n),e.style.display="none"))};e.getAnimations&&(n=setInterval(a,250),a())})();</script></figure>

<slide class="bg-black-blue aligncenter" >

# 传统打包工具的dev-server

---

* 本地运行前需要加载所有模块文件并导出bundle才能展示页面
* 包括对每个文件导入/导出关系的解析
* 将各个模块排序、重写、关联
* 应用越大，开发服务的启动速度也越慢
* 代码分割只针对于生产环境构建

<slide class="bg-black-blue aligncenter" >

# ES Module的特点

---

* 模块代码只在加载后执行
* 模块引用相同js只加载一次
* 模块是单例
* 模块可以请求加载其他模块
* 支持循环依赖
* 默认在严格模式下执行
* 不共享全局命名空间
* 模块顶级this的值是undefined
* 模块var声明不会添加到window

<slide class="bg-black-blue aligncenter" >

# Vite与前端基建

<slide class="bg-black-blue aligncenter" >

# 基建怎么搞

<slide class="bg-black-blue aligncenter" >

# 文档建设

---

* ### 业务文档
* ### 技术文档
* ### 分享沉淀
* ### 新人文档
* ### 规范文档

<slide class="bg-black-blue aligncenter" >

# 团队规范

#### 结合我们团队现状

---

<slide class="bg-black-blue aligncenter" >

# 编码规范

---

* ### 代码规范
* ### 命名规范
* ### 组件规范


<slide class="bg-black-blue aligncenter" >

# 流程规范

---

* ### Git规范
* ### 项目搭建
* ### 分支管理
* ### 文档规范
* ### 代码review

<slide class="bg-black-blue aligncenter" >

# 工程化建设

---

* ### 项目工程化架构
* ### 基础库：Utils/UI等
* ### 模板仓库
* ### Cli工具
* ### 组件管理
* ### 插件工具

<slide class="bg-black-blue aligncenter" >

# 自动化构建部署

---

* ### Lint 检测
* ### 包检测
* ### 合法与安全性检测
* ### Webhooks
* ### 打包编译
* ### 部署
* ### 通知企业微信群

<slide class="bg-black-blue aligncenter" >

# 埋点和监控

---

* ### 业务数据埋点与收集
* ### 技术埋点与收集
* ### 页面性能
* ### 安全性

<slide class="bg-black-blue aligncenter" >

# 开源规范

---

* ### GIT规范/良好的提交备注
* ### 完整的说明文档
* ### 一致的开发环境和依赖
* ### 代码风格：代码结构清晰，代码抽象合理，文件名、变量名等命名合理易读
* ### 开源项目的功能要具有通用性
* ### 许可

<slide class="bg-black-blue aligncenter" >

# 团队愿景

---

* ### 有思考地追求新技术
* ### 分享与开源
* ### 开阔与创新
* ### 技术与业务共赢
* ### 沙雕与欢乐
* ### 偶尔一起摸鱼

<slide class="bg-black-blue aligncenter" image="https://qnimg.vadxq.com/ppt/2019/photo-1421930535025-d2af27c14065.jfif .anim">
:::{.aligncenter}

# 谢谢 {.text-landing}

Thank you {.text-landing}
:::

---

Shanghai 2021.06.11 {.text-intro.animated.fadeInUp.delay-500}

vadxq {.text-intro.animated.fadeInUp.delay-500}

:::footer

[回味：https\://ppt.vadxq.com](https://ppt.vadxq.com){.alignleft}

[:fa-github: @vadxq](https://github.com/vadxq){.alignright}
[:fa-twitter: @vadxq](https://github.com/vadxq){.alignright}

:::

<!-- :::header
Header (logo) :.alignright:{.alignright} -->

:::

<slide class="bg-black-blue aligncenter" >

###### 抽取下一位幸运分享的幸运听众 {.animated.fadeInUp.delay-600}

<iframe src="https://www.random-online.com/" width="100%" height="620px">
</iframe>
