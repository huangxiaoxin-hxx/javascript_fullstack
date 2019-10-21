//index.js
Page({
  data: {
    markers: [],
    longitude: 116.409182, //经度
    latitude: 39.908471,  //纬度
    scale: 18,  //地图显示的大小，数值越大，地图越精细
  },
  onLoad() {
    // 微信赋予小程序可以调用的API
    wx.showLoading({
      title: '获取坐标中'
    });
    // 手机的GPS
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        // console.log(res)
        let { longitude, latitude } = res;
        this.tocreateMarkers(longitude, latitude)
        // console.log(longitude, latitude);
        this.setData({
          longitude,
          latitude
        }, () => {
          wx.hideLoading();
        })
      }
    })
  },
  onReady() {
    // 地图js对象，地图上下文环境
    this.mapCtx = wx.createMapContext('myMap');
  },
  toVisit(e) {
    console.log(e);
  },
  toScan() {
    return wx.scanCode({
      success: (res) => {
        //console.log(res);
        wx.showModal({
          title: 'scan',
          content: JSON.stringify(res)
        })
      }
    })
  },
  toUser() {

  },
  toMsg() {

  },
  toReset() {
    // 当你使用地图来来去去的时候，你可能会迷失方向，你需要回到你当初的起点
    this.mapCtx.moveToLocation();
    this.setData({
      scale: 18
    });
  },
  tocreateMarkers(longitude, latitude) {
    let markers = [
      {
        "id": 1,
        "iconPath": "/images/map-bicycle.png",
        "latitude": latitude,
        "longitude": longitude,
        "width": 52.5,
        "height": 30,
        "callout": {}
      }
    ]
    this.setData({
      markers
    });
  }
})
