// const { protocol, host } = window.location
const host = window.location.href.indexOf('h.dxy.cn') !== -1 ? 'h.dxy.cn' : 'h.dxy.net'
const projectName = 'projectName' // 项目名，请替换
const mockRoot = 'https://f2e.dxy.net/mock-api/client/'

const useMock = window.location.href.indexOf('127.0.0.1') !== -1 || window.location.href.indexOf('localhost') !== -1

// 是否开启mock代理，0：不代理；1：代理线上；2：代理测试
const mockProxy = 0

const apiMap = {
  submit: ['post', 'form/post', '5ba1e2840181fb3363cc9732']
}

const apis = {}

for (let api in apiMap) {
  const data = apiMap[api]
  let url = `//${host}/${projectName}/papi/${data[1]}`
  if (useMock && data[2]) {
    url = `${mockRoot}${data[2]}`
    if (mockProxy) {
      url += `?_mockProxyStatus=${mockProxy}`
    }
  }
  apis[api] = {
    url,
    method: data[0]
  }
}

export default apis
