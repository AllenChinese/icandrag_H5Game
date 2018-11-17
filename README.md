# 商业项目模板

> pure scaffold for developing web page

## 使用

``` bash
# 安装依赖
npm install

# 开发
npm run dev

# 构建项目
npm run build

# 构建项目（相比npm run build，静态资源引入时会采用绝对路径）
npm run dxybuild:prod

# 当后端需要模板时，执行此命令，前提必须先执行npm run build构建资源文件。执行后，访问3000端口可看到网站。
npm run start

```

## 配置

`config/index.js`:

- `layout`
  - `html`: 默认的html模板文件
  - `entry`: 模板文件对应的入口js，所有页面公共的js也可以在此文件中写入。如不需要，可以删除此配置。

- `assetsVersionMode`: 静态资源版本控制模式。设为`hash`则采用文件哈希值；或者直接写后端的对应的版本变量名；或者直接写 `+new Date()`则每次发布更新资源时间戳。另外，这仅对html内引入的静态资源有效，css内链的图片依旧采用哈希值来控制版本。

其他配置可参考 [guide](http://vuejs-templates.github.io/webpack/)

## 约定

1. `entries`： 入口文件的目录。一个入口html，必须被包含在一个文件中，以该文件夹名为入口名，并在文件夹内建立一个`index.html`与一个`index.js`文件。`index.html`为页面html，`index.js`为页面js入口。入口支持多级目录嵌套，如项目源码中的示例。
2. `layout`：模版文件目录。此目录放置项目的模版文件。如果一个html入口文件需要加载其他的模版文件，采用装饰器语法，如`entries/detail/user/index.html`文件中的示例：`@layout(../../../layout/detail.html)`。也可以参考[html-layout-loader](https://github.com/wuomzfx/html-layout-loader)。
3. 其他资源文件夹没有强制约定，可自行根据喜好设定。


## **开发规范**

1. 尽量使用一级路由。
2. 由于采用后端套页面的方式，故而脚手架会让html内联的图片强制不走base64转换。因此，如果图片比较小，使用css background的方式引入图片。
3. 由于需要兼容大部分浏览器（ > IE8 ），开发时需注意兼容问题，如浏览器API的兼容性，css的兼容性等。脚手架默认带上了`babel-polyfill`，若是无兼容考虑，可以删去`babel-polyfill`的引入。
