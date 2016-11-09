//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    //getStorageSync: 从本地缓存中同步获取指定 key 对应的内容。
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    console.log('App Launch');
  },
  onShow: function() {
      console.log('App Show');
  },
  onHide: function() {
      console.log('App Hide');
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo);
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  },
  globalData:{
    userInfo:null
  }
});
