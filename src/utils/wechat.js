import wechatSDK from '@dxy/wechat-sdk'
import $ from 'jquery'

wechatSDK.initWechatSDK({
  debug: false,
  additionJsApiList: [],
  onLoad: (wx) => {
    console.log('校验完毕')
  },
  onError: (error) => {
    console.log(`校验失败：${error}`)
  }
})

let shareConfig = {
  title: $('#wx_title').attr('content'),
  imgUrl: $('#wx_imgUrl').attr('content'),
  desc: $('#wx_desc').attr('content')
}

// if (window.WX_CONFIG) {
//   if (window.WX_CONFIG.image) {
//     shareConfig.imgUrl = window.WX_CONFIG.image
//   }
//   if (window.WX_CONFIG.desc) {
//     shareConfig.desc = window.WX_CONFIG.desc
//   }
//   if (window.WX_CONFIG.title) {
//     shareConfig.title = window.WX_CONFIG.title
//   }
//   if (window.WX_CONFIG.link) {
//     shareConfig.link = window.WX_CONFIG.link
//   }
// }

wechatSDK.setShareConfig(shareConfig)
