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
    page: 1
  },

  btnVideoclick: function () {
    wx.request({
      url: 'https://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.setData({ casees: result, tabActive: '1' , page: 1});
      }
    })
  },

  btnPlaneclick: function () {
    wx.request({
      url: 'https://www.k-media.cn/api.php?op=autoload&catid=11&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.setData({ casees: result, tabActive: '2',page: 1 });
        // console.log(result)
      }
    })
  },

  btnOriginclick: function () {
    wx.request({
      url: 'https://www.k-media.cn/api.php?op=autoload&catid=12&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.setData({ casees: result, tabActive: '3', page: 1 });
      }
    })
  },
  btnAllclick: function () {
    wx.request({
      url: 'https://www.k-media.cn/api.php?op=autoload&catid=13&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        this.setData({ casees: result, tabActive: '4', page:1 });
      }
    })
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const app = getApp();
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
    const app = getApp();
    if (app.globalData.id == '2') {
      this.btnPlaneclick()
    } else {
      wx.request({
        url: 'https://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=1',
        success: (res) => {
          let result = res.data.result;
          this.initCases = result;
          //this.setData({ casees: result });
          this.setData({ casees: result, tabActive: '1', page: 1 });
        }
      })
    }
    app.globalData.id = '1'
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
    let page = this.data.page + 1;
    let url = "https://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=1"
    if (this.data.tabActive === '1') {
      url = "https://www.k-media.cn/api.php?op=autoload&catid=10&catty=3&page=" + page
    } else if (this.data.tabActive === '2') {
      url = "https://www.k-media.cn/api.php?op=autoload&catid=11&catty=3&page=" + page
    } else if (this.data.tabActive === '3') {
      url = "https://www.k-media.cn/api.php?op=autoload&catid=12&catty=3&page=" + page
    } else if (this.data.tabActive === '4') {
      url = "https://www.k-media.cn/api.php?op=autoload&catid=13&catty=3&page=" + page
    } 
    wx.request({
      url: url,
      success: (res) => {
        let result = res.data.result;
        if (result === undefined) {
          return false;
        }
        result = this.data.casees.concat(result);
        this.setData({ casees: result, tabActive: '1', page: page });
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})