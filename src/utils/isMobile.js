const isMobile = () => {
  if (!window.navigator || !window.navigator.userAgent) {
    return false
  }
  return !!window.navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)
}

export default isMobile()
