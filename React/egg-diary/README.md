# demo



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

app文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。
config文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。
logs文件夹：日志文件夹，正常情况下不用修改和查看里边内容。
node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。
run文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。
test文件夹：测试使用的配合文件，这个在测试时会使用。
.autod.conf.js: egg.js自己生成的配置文件，不需要进行修改。
eslinttrc和eslintignore：代码格式化的配置文件。
gitgnore：git设置忽略管理的配置文件。
package.json： 包管理和命令配置文件，这个文件经常进行配置。

# 目录约定规范
controller文件夹：控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。
public文件夹：公用文件夹，把一些公用资源都放在这个文件夹下。
router.js: 项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问router.js文件。
service文件夹：这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。
view文件夹：模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立view文件夹。
extend文件：当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。
middleware：中间件文件夹，用来写中间件的，比如最常用的路由首位。

# 前端模版
npm i egg-view-ejs