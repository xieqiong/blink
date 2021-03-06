// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // dingyi anli
    initCases: [],
    casees: [],
    planCasees: [],
    tabActive: '1',
    section_Up_Height: '200'
  },
  btnCaseDetail: function (event) {
    // console.log(event)
    let url = event.target.dataset.url;
    let title = event.target.dataset.title;
    let suburl = url.substr(url.indexOf("catid="), url.length);
    let catid = suburl.substr(6, suburl.indexOf("=") - 3);
    let id = suburl.substr(suburl.lastIndexOf("=") + 1, suburl.length);
    wx.navigateTo({
      url: '/pages/case/case?title=' + title + '&id=' + id,
    })
  },

  btnclick: function () {
    const app = getApp();
    app.globalData.id = '1'
    wx.switchTab({    //跳转到tabBar页面，并关闭其他所有tabBar页面
      url: "/pages/index/index"
    })
  },
  btnclickPlan: function () {
    const app = getApp();
    app.globalData.id  = '2'
    wx.switchTab({    //跳转到tabBar页面，并关闭其他所有tabBar页面
      url: "/pages/index/index"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({ success: function (res) { 
      //console.log(res); 
      that.setData({ section_Up_Height: res.windowWidth / 16 * 9 }) 
      } 
    })
    wx.request({
      url: 'https://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=1',
      success: (res)=>{
        let result = res.data.result;
        this.initCases = result;
        this.setData({ casees: result});
      }
    })
    wx.request({
      url: 'https://www.k-media.cn/api.php?op=autoload&catid=11&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.initCases = result;
        this.setData({ planCasees: result });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})