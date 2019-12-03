## 静态资源
 不会随着服务运行而改变的东西
 html css js jpg

 请求的url和 文件在磁盘上的 路径 一一对应起来
 :8888/houbei.jpg  没找到 -> 404
 :8888/js/houbei.jpg  找到 -> read -> res

 nginx

 浏览器 双击打开
 file 协议 ./ ../
 放到服务器上 http 协议