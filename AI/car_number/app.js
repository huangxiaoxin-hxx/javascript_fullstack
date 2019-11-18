var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify; //图片分类
var fs = require('fs')  //文件模块

var APP_ID = "17798908";
var API_KEY = "dUlE3YbU9PujP1SILWkRblYq";
var SECRET_KEY = "frF4vtpgeAl1qcpnKEhThPe6X5ATmbrF";

// 内存 -> I/O

var image = fs.readFileSync('./gtr.jpg').toString('base64')  //同步

var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
client.carDetect(image)
  .then(function(result) {
    console.log(result);
  })
  .catch(function(err) {
    console.log(err);
  })

// console.log(image);