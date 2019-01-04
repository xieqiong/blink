// pages/case/case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: {},
    arrays: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let url = "https://www.k-media.cn/api.php?op=getcontent&id="+ options.id
    wx.request({
      url: url,
      success: (res) => {
        let result = res.data;
        // this.setData({ result: result });
        let newImgs = []
        if(result.content.length > 0) {
          let content = result.content;
          let imgContets = content.split('<img');
          for(let i = 0; i < imgContets.length; i++) {
            if(imgContets[i].indexOf("src") > 0) {
              let newImg = imgContets[i].substr(imgContets[i].indexOf("src") + 5, imgContets[i].length);
              newImg = newImg.substr(0, newImg.indexOf('"'))
              let content = { src: newImg}
              newImgs.push(content);
            }
          }
          //this.setData({ imgs: newImgs });
        }
        result.imgs = newImgs
        this.setData({ result: result, arrays: newImgs});
      }
    })
  },
  btnCaseDetail: function (event) {
    console.log(event)
    // this.isPlaying  = false
    //let videoContextPrev = wx.createVideoContext("videoId")
    this.videoContext.stop();
    let url = event.target.dataset.url;
    //console.log(url)
    let suburl = url.substr(url.indexOf("catid="), url.length);
    let catid = suburl.substr(6, suburl.indexOf("=") - 3);
    let id = suburl.substr(suburl.lastIndexOf("=") + 1, suburl.length);
    wx.redirectTo({
      url: '/pages/case/case?carid=' + catid + '&id=' + id,
    })
  },
  btnclick: function () {
    wx.switchTab({    //跳转到tabBar页面，并关闭其他所有tabBar页面
      url: "/pages/classic/classic"
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
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

  onShareAppMessage: function (res) {
    console.log(this.data.result)
    return {
      title: this.data.result.title,
      // path: '这里写你这个页面的路径',
      imageUrl: this.data.result.bg_images,
      success: function (shareTickets) {
        console.info(shareTickets + '成功');
        // 转发成功
      },
      fail: function (res) {
        console.log(res + '失败');
        // 转发失败
      },
      complete: function (res) {
        // 不管成功失败都会执行
      }
    }
  }
})