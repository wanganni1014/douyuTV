<template>
    <div id="root">
      <div id="video"><span class="glyphicon glyphicon-play-circle"></span></div>
      <div id="left">
         <p>主播：{{item.owner_name}}</p>
         <p>共{{item.online}}人正在观看</p>
      </div>
      <div id="right">分享&nbsp;&nbsp;<span class="glyphicon glyphicon-share"></span></div>
      <div id="banner"></div>
      <div id="hot"><span class="glyphicon glyphicon-fire"></span> 热门直播</div>
    <section v-for="item in items">
        <router-link :to="{path:'/freepage',query:{id:item.room_id}}">
            <img :src="item.room_src" alt="">
            <div id="info_bar">
                <span>{{item.nickname}}</span>
                <span class="glyphicon glyphicon-eye-open">{{item.online}}</span>
            </div>
            <p class="room_info">{{item.room_name}}</p>
        </router-link>    
    </section>
    </div>
</template>
<script>
// import bus from './bus.js'
export default {
  data(){
    return {
      item:[],
      items:[]
    }
  },
   created () {
      var id = this.$route.query.id
      let successCallback = (response) => {
          this.item=response.data.data
        }
        let errorCallback = (error) => {
          console.log("error")
        }
        this.$http.get('/api/room/'+id)
                  .then(successCallback, errorCallback)
        
      let success = (res) => {
          this.items=res.data.data
        }
        let error = (err) => {
          console.log("error")
        }
        this.$http.get('/api/live?limit=20')
                  .then(success, error)
  }
}
</script>
<style scoped>
#video{
  width:100%;
  height:300px;
  position:relative;
  background-color:black;
}
#video span{
  display:block;
  color:white;
  font-size:40px;
  line-height:300px;
  width:50px;
  margin:0 auto; 
}
#left{
  float:left;
}
#right{
  float:right;
  margin-top:15px;
}
#banner{
  height:15px;
  background-color:#ddd;
  margin-top:60px;
}
#hot{
  font-size:20px;
  margin-top:5px;
}
#hot span{
  color:red;
 
}
*{
    box-sizing:border-box;
}
 section{
     display:inline-block;
     width:50%;
     padding-left:10px;  
     position:relative;  
 }
 img{
     width:100%;
     border-radius:5px;
 }
 #info_bar{
     position:absolute;
     height:30px;
     bottom:30px;
     line-height:30px;
     width:96%;
     color:white;
     padding-right:10px;
     background:linear-gradient(#ddd,black);
 }
 #info_bar span:nth-of-type(1){
     float:left;
 }
 #info_bar span:nth-of-type(2){
     float:right;
 }
 .room_info{
     color:black;
 }
    
</style>