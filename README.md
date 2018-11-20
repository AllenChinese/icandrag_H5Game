# 项目模板

> pure scaffold for developing web page
## icandrag_H5Game
    《拖拽 h5 小游戏》


## 功能

> 主要用到 h5 手势中的 touchstart、touchmove、touchend 事件，配合元素的位置关系。将 draggable 扩展到 jQuery 方法中。使用 dragEle.draggable() 实现元素的拖拽。

## 使用

``` bash
# 安装依赖
npm install

# 开发
npm run dev

# 构建项目
npm run build

# 当后端需要模板时，执行此命令，前提必须先执行npm run build构建资源文件。执行后，访问 3000 端口可看到网站。
npm run start

```

## 配置

`config/index.js`:

- `layout`
  - `html`: 默认的html模板文件
  - `entry`: 模板文件对应的入口js，所有页面公共的js也可以在此文件中写入。如不需要，可以删除此配置。

- `assetsVersionMode`: 静态资源版本控制模式。设为`hash`则采用文件哈希值；或者直接写后端的对应的版本变量名；或者直接写 `+new Date()`则每次发布更新资源时间戳。另外，这仅对html内引入的静态资源有效，css内链的图片依旧采用哈希值来控制版本。

其他配置可参考 [guide](http://vuejs-templates.github.io/webpack/)


## **开发规范**

1. 尽量使用一级路由。
2. 由于需要兼容大部分浏览器（ > IE8 ），开发时需注意兼容问题，如浏览器API的兼容性，css的兼容性等。脚手架默认带上了`babel-polyfill`，若是无兼容考虑，可以删去`babel-polyfill`的引入。
