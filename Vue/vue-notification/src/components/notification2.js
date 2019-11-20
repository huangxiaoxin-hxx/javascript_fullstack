import vue from 'vue'

import Notification from './Notification.vue'

const NotificationConstructor = vue.extend(Notification)
let notification
export const open = ({title, content}) => {
  if (notification){
    notification.title = title
    notification.content = content
  } else {
    notification = new NotificationConstructor({
      el: document.createElement('div'),
      propsData: {
        visiable: true,
        title,
        content
      }
    })
    document.body.appendChild(notification.$el)
  }
}

export const close = function () {
  notification.visiable = false
  document.body.removeChild(notification.$el)
  notification = null
}