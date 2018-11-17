import $ from 'jquery'
import API from '@/utils/api'
import isMobile from '@/utils/isMobile'
/**
  * 登录、退出
  */
let loginEl = $('.loginAndName')
let loginSpanEl = $('.loginAndName span')
let logoutEl = $('.registerAndLogout')
let loginUrl = `/sinocare2018/papi/login`
let logoutUrl = `/sinocare2018/papi/logout`
let registerUrl = `/sinocare2018/papi/register`
// ========================= start
// 初始化
// 获取登录信息
function login () {
  console.log('是否需要传type：', )
  API.userinfo().then((res) => {
    console.log(res.success && res.results.username)
    if (res.success && res.results.username) {
      logined(res.results.username)
    }
  })
}

function logined (username) {
  // 渲染页面
  loginEl.text(username)
  logoutEl.text('退出')
  loginEl.attr({
    'href': 'javascript:void(0)',
    'data-login': true
  })
  logoutEl.attr('href', logoutUrl)
}

// ========================= end
export default login


