// pages/records/records.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
    let info = wx.getStorageInfoSync()  //读取本地缓存信息
    let keys = info.keys    //获取全部key信息 
    let myList = [];
    for(var i=0;i<keys.length;i++)
    {
      let obj = wx.getStorageSync(keys[i])
      myList.push(obj)
    }
    this.setData({
      list:myList
    })
  },
  togodetail:function(e){
   
    let id = e.currentTarget.dataset.id
    let it = e.currentTarget.dataset.it
    let leibie = e.currentTarget.dataset.leibie

    //判断这个id是否是数字，决定跳转的页面，项目有两个详情页，一个调用api，一个调用云存储
   let  b = isNaN(id);
   if(!b){
    wx.navigateTo({
      url: '../../pages/detail/detail?id='+id,
    })
  }
  else if(b){
    wx.navigateTo({
      url: '../../pages/detailist/detailist?id='+it+"&leibie="+leibie,
    })
  }
  },
  //运用removeStorageSync（id）删除storage的缓存,难点，浏览记录的list有一部分是id，
  //另一部分是_id，id是数字要转字符串，
  removeRocord:function(e){

    let it = e.currentTarget.dataset.it
    let b = e.currentTarget.dataset.id

    //remove的id只能是字符串
    //如果e.currentTarget.dataset.id没定义则不执行，
    if(b!=undefined){
     
      let id = e.currentTarget.dataset.id.toString()
       wx.removeStorageSync(id)//调用id删除Storage缓存
    }
    if(it!=""){
      wx.removeStorageSync(it)//调用_id删除storage
      }
    this.onLoad()
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