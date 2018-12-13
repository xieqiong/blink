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
    list: [
      {
        id: 'view',
        name: '视频包装设计师',
        open: false,
        pages: ['职位职责：', '1、负责汽车类短视频文案创作编写、车展等线下项目活动方案的策划工作，提供创意；', '2、搜集整理汽车市场最新动态、热点新闻；', '3、协助团队视频拍摄及后期成片效果审核；', '4、配合负责人及其他策划人员，提供节目整体创意及优化方案；', '5、完成上级领导人员安排的其他工作。', '职位要求：', '1、具备创意思维，擅长调侃与铺梗，可以按照节目需求灵活调整文案风格','2、具备一定的汽车行业相关知识。有汽车类自媒体工作经验者优先']
      }, {
        id: 'content',
        name: '视频剪辑设计师',
        open: false,
        pages: ['职位职责：', '1、负责汽车类短视频文案创作编写、车展等线下项目活动方案的策划工作，提供创意；', '2、搜集整理汽车市场最新动态、热点新闻；', '3、协助团队视频拍摄及后期成片效果审核；', '4、配合负责人及其他策划人员，提供节目整体创意及优化方案；', '5、完成上级领导人员安排的其他工作。', '职位要求：', '1、具备创意思维，擅长调侃与铺梗，可以按照节目需求灵活调整文案风格', '2、具备一定的汽车行业相关知识。有汽车类自媒体工作经验者优先']
      }, {
        id: 'form',
        name: '视频包装设计师',
        open: false,
        pages: ['职位职责：', '1、负责汽车类短视频文案创作编写、车展等线下项目活动方案的策划工作，提供创意；', '2、搜集整理汽车市场最新动态、热点新闻；', '3、协助团队视频拍摄及后期成片效果审核；', '4、配合负责人及其他策划人员，提供节目整体创意及优化方案；', '5、完成上级领导人员安排的其他工作。', '职位要求：', '1、具备创意思维，擅长调侃与铺梗，可以按照节目需求灵活调整文案风格', '2、具备一定的汽车行业相关知识。有汽车类自媒体工作经验者优先']
      }
    ]
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
  }
})