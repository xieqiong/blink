// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // dingyi anli
    initCases: [],
    casees: [],
    tabActive: '1',
  },

  btnVideoclick: function () {
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.initCases = result;
        this.setData({ casees: result, tabActive: '1' });
      }
    })
  },

  btnPlaneclick: function () {
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoload&catid=11&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.initCases = result;
        this.setData({ casees: result, tabActive: '2' });
        console.log(result)
      }
    })
  },

  btnOriginclick: function () {
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoload&catid=12&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.initCases = result;
        this.setData({ casees: result, tabActive: '3'});
      }
    })
  },
  btnAllclick: function () {
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoload&catid=13&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.initCases = result;
        this.setData({ casees: result, tabActive: '4' });
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=1',
      success: (res)=>{
        let result = res.data.result;
        this.initCases = result;
        this.setData({ casees: result});
        console.log(result)
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