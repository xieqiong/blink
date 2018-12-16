Page({
  onShow() {
    wx.reportAnalytics('enter_home_programmatically', {})
  },
  onShareAppMessage() {
    return {
      title: '小程序官方组件展示',
      path: 'page/component/index'
    }
  },

  data: {
    list: [],
    planeList: [],
    publicList: [],
    joyList: []
  },

  kindToggle(e) {
    const id = e.currentTarget.id
    const list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id === id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoloadinfo&catid=14&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        // this.initCases = result;
        for(let i = 0; i<result.length; i++) {
          result[i].open = false
          result[i].content = result[i].data[0].content
        }
        this.setData({ list: result });
        console.log(result)
      }
    })
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoloadinfo&catid=15&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        // this.initCases = result;
        for (let i = 0; i < result.length; i++) {
          result[i].open = false
          result[i].content = result[i].data[0].content
        }
        this.setData({ planeList: result });
        console.log(result)
      }
    })
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoloadinfo&catid=15&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        // this.initCases = result;
        for (let i = 0; i < result.length; i++) {
          result[i].open = false
          result[i].content = result[i].data[0].content
        }
        this.setData({ publicList: result });
        console.log(result)
      }
    })
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoloadinfo&catid=15&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
        // this.initCases = result;
        for (let i = 0; i < result.length; i++) {
          result[i].open = false
          result[i].content = result[i].data[0].content
        }
        this.setData({ joyList: result });
        console.log(result)
      }
    })
  },
})