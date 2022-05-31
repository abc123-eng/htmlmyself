const db = wx.cloud.database()
Page({

    data: {
      list: [],//常识类别
      shuju:[], //科普类别
      live:[], //生活类别
      pyo:[], //心理类别
      film:[] //影视类别
    },
    gotolist:function(e){
     //携带数据leibie到下一个页面
      let leibie = e.currentTarget.dataset.leibie 
      //携带参数id跳转到下一个页面的onload
      wx.navigateTo({
        url: '/pages/list/list?leibie='+leibie,
      })
    },
    
    onLoad: function (e) {
    //调用云存储数据,常识类别（common）
      db.collection('common')
      .where({
        idi:'01'
      })
      .get()
      .then(res=>{
        this.setData({
          list:res.data
        })
      })


  //调用云存储数据,科普类别（kepu），
      db.collection('kepu')
     .where({
       idi:'02'
     })
      .get()
      .then(res=>{
     
        this.setData({
          shuju:res.data
        })
      })

       //调用云存储数据,生活类别（comLive），
       db.collection('comLive')
       .where({
         idi:'03'
       })
        .get()
        .then(res=>{
       
          this.setData({
            live:res.data
          })
        })

         //调用云存储数据,生活类别（comLive），
       db.collection('compyo')
       .where({
         idi:'04'
       })
        .get()
        .then(res=>{
       
          this.setData({
            pyo:res.data
          })
        })
   //调用云存储数据,生活类别（comfilm），
   db.collection('comfilm')
   .where({
     idi:'05'
   })
    .get()
    .then(res=>{
   
      this.setData({
        film:res.data
      })
    })


    }
})