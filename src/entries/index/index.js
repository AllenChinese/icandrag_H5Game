import '@/css/index.less'
import $ from 'jquery'
import '@/utils/draggable'
const dragImgList = $('.dragLi')
dragImgList.draggable({
  targetElement: '.targetLi', // 性能可优化部分
  previewWay: 'data-src',
  cssOption: {
    borderColor: '#296ccf',
    borderWidth: '2px'
  }
})
