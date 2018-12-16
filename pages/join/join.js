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
  
  setListFalse: function () {
    let list = this.data.list
    for (let i = 0, len = list.length; i < len; ++i) {
      list[i].open = false
    }
    this.setData({list})
    let planeList = this.data.planeList
    for (let i = 0, len = planeList.length; i < len; ++i) {
      planeList[i].open = false
    }
    this.setData({planeList})
    let publicList = this.data.publicList
    for (let i = 0, len = publicList.length; i < len; ++i) {
      publicList[i].open = false
    }
    this.setData({publicList})
    let joyList = this.data.joyList
    for (let i = 0, len = joyList.length; i < len; ++i) {
      joyList[i].open = false
    }
    this.setData({joyList})
  },

  kindToggle(e) {
    this.setListFalse()
    const id = e.currentTarget.id
    let list = this.data.list
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
  kindPlaneListToggle(e) {
    this.setListFalse()
    const id = e.currentTarget.id
    let planeList = this.data.planeList
    for (let i = 0, len = planeList.length; i < len; ++i) {
      if (planeList[i].id === id) {
        planeList[i].open = !planeList[i].open
      } else {
        planeList[i].open = false
      }
    }
    this.setData({
      planeList
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
  kindPublicListToggle(e) {
    this.setListFalse()
    const id = e.currentTarget.id
    let publicList = this.data.publicList
    for (let i = 0, len = publicList.length; i < len; ++i) {
      if (publicList[i].id === id) {
        publicList[i].open = !publicList[i].open
      } else {
        publicList[i].open = false
      }
    }
    this.setData({
      publicList
    })
    wx.reportAnalytics('click_view_programmatically', {})
  },
  kindJoyListToggle(e) {
    this.setListFalse()
    const id = e.currentTarget.id
    let joyList = this.data.joyList
    for (let i = 0, len = joyList.length; i < len; ++i) {
      if (joyList[i].id === id) {
        joyList[i].open = !joyList[i].open
      } else {
        joyList[i].open = false
      }
    }
    this.setData({
      joyList
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
      }
    })
    wx.request({
      url: 'http://www.k-media.cn/api.php?op=autoloadinfo&catid=15&catty=3&page=1',
      success: (res) => {
        let result = res.data.result;
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