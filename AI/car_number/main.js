var fs = require('fs')  //文件模块
var AipOcrClient = require('baidu-aip-sdk').ocr; //从图片中提取文字
var image = fs.readFileSync('./pao.jpg').toString('base64')  //文件本身就是二进制文本

var APP_ID = "17799059";
var API_KEY = "wXHdSzK1zYdiPz7NECeGaNKP";
var SECRET_KEY = "PAWiYsyBBNQ1GUsfewu2u994nw9DNgQ5";

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY);

var options = {}
client.licensePlate(image, options)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  }) 