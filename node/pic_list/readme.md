- restful web
  一切皆资源
  DOM + CSS + JS
  URL Universal Resource Location
  http://www.taobao.com/shop/1/good/2
  明确的表达 他的资源是什么意思

- npm init -y 从前端项目，加入后端
  scripts 脚本区域 可以执行一些命令
  json-server npm 包
  它可以在 url 上将我们的json文件向外暴露
  json 资源 restful
  - 语意化的url
  :1314/posts  GET 文章列表
  :1314/posts/:id  详情
  - 请求方法：
    GET url 明文访问
    POST 新增数据
    PUT 修改数据
    PATCH 修改数据
    DELETE 删除数据

    url + 谓语动词 
    PUT       覆盖型修改，将旧的文件全部删除，然后加入新的东西
    PATCH     部分修改，只修改指定的东西

  - :8080 live-server 启动了 web 页面
    :1314 启用了后端API
    不同的代表不同的服务
    前后端  全栈