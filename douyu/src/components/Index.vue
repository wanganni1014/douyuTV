<template>
<div id="left">
    <vue-swipe></vue-swipe>
    <section v-for="item in items">
        <router-link :to="{path:'/roomlist',query:{id:item.room_id}}">
            <img :src="item.room_src" alt="">
            <div id="info_bar">
                <span>{{item.nickname}}</span>
                <span class="glyphicon glyphicon-eye-open">{{item.online}}</span>
            </div>
            <p>{{item.room_name}}</p>
        </router-link>    
    </section>
<button @click="more()" v-if="count<4?true:false">更多热门直播</button>
</div>
</template>
<script>
import bus from '../bus.js'
import vueSwipe from './vueSwipe'
import roomList from './roomList'
export default {
  name: 'app',
  data(){
    return {
      items:[],
      count:0
    }
  },
   created () {
      let successCallback = (response) => {
          this.items=response.data.data
        }
        let errorCallback = (err) => {
          console.log("error")
        }
        this.$http.get('/api/live?limit=20')
                  .then(successCallback, errorCallback)
  },
  components:{
      vueSwipe
  },
  mounted(){
      bus.$emit('default','斗鱼TV')
  },
  methods:{
      more(){
          this.count++
          var count = this.count+1
          console.log(this.count)
          let successCallback = (response) => {
          console.log('success')
          console.log(response.data.data[0])
          this.items=response.data.data
        }
        let errorCallback = (err) => {
          console.log("error")
        }
        this.$http.get('/api/live?limit='+20*count)
                  .then(successCallback, errorCallback)
      }
  },
}
</script>
<style lang="" scoped>
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
 p{
     color:black;
 }
 button{
     display:block;
     background-color:red;
     border-radius:5px;
     width:150px;
     margin:0 auto;
 }
</style>
