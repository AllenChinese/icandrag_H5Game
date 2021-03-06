# 项目模板

> 多页面开发模板，具备打包功能。

## icandrag_H5Game
    《拖拽 h5 小游戏》
    
    闯关的形式，依次将图片进行合理的排序，正确则进入下一关，通关有惊喜。


## 功能

> 主要用到 h5 手势中的 touchstart、touchmove、touchend 事件，配合元素的位置关系实现拖拽功能。利用 extend 将 draggable 扩展到 jQuery 中，使用 dragEle.draggable() 形式进行调用。

## 使用

``` bash
# 安装依赖
npm install

# 开发
npm run dev

# 构建项目
npm run build

# 当后端需要模板时，执行此命令，前提必须先执行 npm run build 构建资源文件。执行后，访问 3000 端口可看到网站。
npm run start

```

## 配置

`config/index.js`:

- `layout`
  - `html`: 默认的 html 模板文件
  - `entry`: 模板文件对应的入口 js，所有页面公共的 js 也可以在此文件中写入。如不需要，可以删除此配置。

- `assetsVersionMode`: 静态资源版本控制模式。设为 `hash` 则采用文件哈希值；或者直接写后端的对应的版本变量名；或者直接写 `+new Date()` 则每次发布更新资源时间戳。另外，这仅对 html 内引入的静态资源有效，css 内链的图片依旧采用哈希值来控制版本。

其他配置可参考 [guide](http://vuejs-templates.github.io/webpack/)


## **开发规范**

1. 尽量使用一级路由。
2. 由于需要兼容大部分浏览器（ > IE8 ），开发时需注意兼容问题，如浏览器 API 的兼容性，css 的兼容性等。脚手架默认带上了 `babel-polyfill` ，若是无兼容考虑，可以删去 `babel-polyfill` 的引入。
