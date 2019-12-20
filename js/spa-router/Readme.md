## hash
url 不好看
好处: 兼容性

## history
baidu.com -> baidu.com/s/
url 好看
坏处: js pushState() 不会引起页面的刷新,但是在 /url4 上面点击刷新，是会把 /url4 发送到后端请求资源的 后端没做任何处理的话 404

window.addEventListener('popstate'): 检测到 浏览器 前进 后退
back go forward 这个几个行为带来的 url 的变化

pushState: ?
rep;aceState: ?