const db = wx.cloud.database()
Page({
  data: {
    list: [], //从上一个页面传递过来的数据，无论什么类别用一个数组暂存即可
  },

  togodetail: function (e) {
    //在页面结构定义的data-id和data-leibie
    let id = e.currentTarget.dataset.id
    let leibie = e.currentTarget.dataset.leibie
    //携带两个参数跳转到下一个页面
    wx.navigateTo({
      url: '/pages/detailist/detailist?id=' + id + "&leibie=" + leibie,
    })
  },
  onLoad: function (e) {

    var that = this
    //根据上个页面传递的参数leibie,获取数据库common的数据
    //if判断传过来的数据要调用哪个数据库，防止报错
    if (e.leibie == '常识') {
      db.collection('common')
        .where({
          leibie: e.leibie
        })
        .get()
        .then(res => {
          that.setData({
            list: res.data
          })
        })
    }
    //根据上个页面传递的参数leibie,获取数据库kepu的数据
    if (e.leibie == "科普") {
      db.collection('kepu')
        .where({
          leibie: e.leibie
        })
        .get()
        .then(res => {
          that.setData({
            list: res.data
          })
        })
    }
    //根据上个页面传递的参数leibie,获取数据库comLive的数据
    if (e.leibie == '生活') {
      db.collection('comLive')
        .where({
          leibie: e.leibie
        })
        .get()
        .then(res => {
          that.setData({
            list: res.data
          })
        })
    }
    //根据上个页面传递的参数leibie,获取数据库compyo的数据
    if (e.leibie == '心理') {
      db.collection('compyo')
        .where({
          leibie: e.leibie
        })
        .get()
        .then(res => {
          that.setData({
            list: res.data
          })
        })
    }
  //根据上个页面传递的参数leibie,获取数据库comfilm的数据
  if (e.leibie == '影视') {
    db.collection('comfilm')
      .where({
        leibie: e.leibie
      })
      .get()
      .then(res => {
        that.setData({
          list: res.data
        })
      })
  }



  }
})