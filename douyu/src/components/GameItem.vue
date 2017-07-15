<template>
    <div>
    <section v-for="item in items">
        <router-link :to="{path:'/roomlist',query:{id: item.room_id}}" class="row">
            <img :src="item.room_src" alt="" class="col-xs-6 col-md-6">
            <div id="info_bar" class="col-xs-6 col-md-6">
                <p class="room_info">{{item.room_name}}</p>
                <p class="glyphicon glyphicon-user">{{item.nickname}}</p>
                <p class="glyphicon glyphicon-eye-open">{{item.online}}</p>
            </div>
        </router-link>    
    </section> 
    </div>
</template>

<script>
export default {
  data(){
    return {
      items:[]
    }
  },
   created () {
      var name = this.$route.query.name
      let successCallback = (response) => {
          console.log('success')
          console.log(response.data.data[0].room_name)
          this.items=response.data.data
        }
        let errorCallback = (err) => {
          console.log("error")
        }
        this.$http.get('/api/live/'+name)
                  .then(successCallback, errorCallback)
  }
}
</script>
<style scoped>
p{
    margin:5px;
}
p:nth-of-type(1){
    color:black;
    font-weight:bold;
}
p:nth-of-type(2){
    color:grey;
    display:block;
}
p:nth-of-type(3){
    color:grey;
}
    
</style>
