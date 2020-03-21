// import * as types from './actionTypes'
import { fromJS } from 'immutable'
// immutable.js 生成 immutable对象，是个不可改变对象

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4287007/b7b9c810-069e-4385-aec7-1823e94ee43d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180'
    }
  ],
  articleList: [
    {
      "id": 1,
      "title": "“因为10个口罩，我看到了妻子的另一面，终止了两年的婚外恋”",
      "desc": "01 作家詹迪·尼尔森曾说：“遇见灵魂伴侣的感觉，就好像是走进一座你曾经住过的房子里——你认识那些家具，认识墙上的画，架上的书，抽屉里的东西：如...",
      "imgUrl": "https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      "id": 2,
      "title": "“因为10个口罩，我看到了妻子的另一面，终止了两年的婚外恋”",
      "desc": "01 作家詹迪·尼尔森曾说：“遇见灵魂伴侣的感觉，就好像是走进一座你曾经住过的房子里——你认识那些家具，认识墙上的画，架上的书，抽屉里的东西：如...",
      "imgUrl": "https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      "id": 3,
      "title": "“因为10个口罩，我看到了妻子的另一面，终止了两年的婚外恋”",
      "desc": "01 作家詹迪·尼尔森曾说：“遇见灵魂伴侣的感觉，就好像是走进一座你曾经住过的房子里——你认识那些家具，认识墙上的画，架上的书，抽屉里的东西：如...",
      "imgUrl": "https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      "id": 4,
      "title": "“因为10个口罩，我看到了妻子的另一面，终止了两年的婚外恋”",
      "desc": "01 作家詹迪·尼尔森曾说：“遇见灵魂伴侣的感觉，就好像是走进一座你曾经住过的房子里——你认识那些家具，认识墙上的画，架上的书，抽屉里的东西：如...",
      "imgUrl": "https://upload-images.jianshu.io/upload_images/14805474-d0c2e5243e2c9d41.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]

})

export default (state = defaultState, action) => {
  
  return state
}