import '@/css/index.less'
import $ from 'jquery'
import '@/utils/draggable'
const dragImgList = $('.dragLi')
for (let i = 0; i < dragImgList.length; i++) {
  const element = dragImgList[i]
  console.log($(element).children()[0].src)
  $(element).attr('data-src', $(element).children()[0].src)
}
dragImgList.draggable({
  targetElement: '.targetLi', // 性能可优化部分
  previewWay: 'data-src',
  cssOption: {
    borderColor: '#296ccf',
    borderWidth: '2px'
  }
})
