// pages/my/my.js
const db=wx.cloud.database()
let connet=db.collection("com_userinfo")
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 
  onLoad(){
    this.getMyInfo()
  },
  gotojilu:function(){
    wx.navigateTo({
      url:'../../pages/records/records'
    })
  },
 // 获取个人信息
 getMyInfo:function(e){
   //从云数据集获得登录信息
   connet
   .get()
   .then(res=>{

    if(res.data.length>0){
      this.setData({
        isLogin:true,
        src:res.data[0].avatarUrl,
        nickName:res.data[0].nickName,
      })
    }
   })
   .catch(err=>{
    console.log("获取失败",err)
   })
   
},
userinfo(){
  //获取用户登录信息
  wx.getUserProfile({
    desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
    success: (res) => {
      console.log(res)
     
      this.setData({
        src:res.userInfo.avatarUrl,
        nickName:res.userInfo.nickName,
         isLogin: true
      })
    
      //添加登录信息进云数据集，下次调用云数据集即可
    
      connet.add({
        data:{
          avatarUrl:res.userInfo.avatarUrl,
          nickName:res.userInfo.nickName,
        }
      })
      
    },
    fail:(err=>{
      console.log("无法登录",err)
    }),
    complete:()=>{
      console.log("???")
    }
  })
},


})