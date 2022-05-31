const db = wx.cloud.database()
Page({
  data: {
    art: {}, //页面显示数据
  },


  onLoad(e) {

    //根据上个页面传递的参数id,获取数据库common的数据
    //if判断传过来的数据要调用哪个数据库，防止报错
    if (e.leibie == '常识') {
      db.collection('common')
        .doc(e.id)
        .get()
        .then(res => {

          this.setData({
            art: res.data
          })
          wx.setStorageSync(e.id, res.data)
        })
    }


    //if判断上一个是哪一个，防止报错
    if (e.leibie == '科普') {
      db.collection('kepu')
        .doc(e.id)
        .get()
        .then(res => {

          this.setData({
            art: res.data
          })
          wx.setStorageSync(e.id, res.data)
        })
    }
    //if判断上一个是哪一个，防止报错
    if (e.leibie == '生活') {
      db.collection('comLive')
        .doc(e.id)
        .get()
        .then(res => {

          this.setData({
            art: res.data
          })
          wx.setStorageSync(e.id, res.data)
        })
    }
    //if判断上一个是哪一个，防止报错
    if (e.leibie == '心理') {
      db.collection('compyo')
        .doc(e.id)
        .get()
        .then(res => {

          this.setData({
            art: res.data
          })
          wx.setStorageSync(e.id, res.data)
        })
    }
     //if判断上一个是哪一个，防止报错
     if (e.leibie == '影视') {
      db.collection('comfilm')
        .doc(e.id)
        .get()
        .then(res => {

          this.setData({
            art: res.data
          })
          wx.setStorageSync(e.id, res.data)
        })
    }




  }
})