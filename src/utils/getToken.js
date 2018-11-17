function getCookie (name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  const arr = document.cookie.match(reg)
  return arr && arr.length ? unescape(arr[2]) : null
}

export default () => getCookie('XSRF-TOKEN')
