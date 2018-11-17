import $ from 'jquery'
import apis from '@/config/apis'
import getToken from '@/utils/getToken'

const handleResponse = response => {
  const { success, message, error } = response
  const msg = message || error || '请求失败，未知错误'
  if (!success && msg !== '无评论内容') {
    alert(msg)
  } else {
    return response
  }
}
const handleError = err => {
  if (err.status) {
    alert(`请求失败[${err.status}]：${err.statusText}`)
  } else if (err.status === 0) { // 请求未完成，页面就跳转发生的中断错误不弹窗提示
    return err
  } else {
    alert('请求失败')
  }
}

const API = {}
for (let api in apis) {
  const { method, url } = apis[api]
  API[api] = (data = {}, config = {}) => {
    return $.ajax({
      headers: {
        'X-XSRF-TOKEN': getToken()
      },
      data: data,
      dataType: 'json',
      error: handleError,
      success: handleResponse,
      type: method,
      url,
      ...config
    })
  }
}

export default API
