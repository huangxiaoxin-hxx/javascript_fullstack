import a from './a'
import b from './b'
import pic from './img/img.jpg'
import './index.css'
// import './index.scss'

var img = new Image()
img.classList.add('pic')
img.src = pic
var root = document.getElementById('root')
root.appendChild(img)
// 既然webpack默认只认识js模块，那么遇到非js模块该怎么办？
// loader
a()
b()

function lm() {
  console.log('welcome to lm')
}

lm()