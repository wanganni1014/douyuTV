<template>
<div class="row">
    <div v-for="item in items" id="game_kinds" class="col-xs-4 col-md-4">
    <router-link :to="{path:'/gameItem',query:{name:item.short_name}}">
        <img :src="item.game_icon" alt="" class="img-circle">
        <p>{{item.game_name}}</p>
    </router-link>
    </div>
</div>
   
</template>

<script>
import bus from '../bus.js'
export default {
  name: 'app',
  data(){
    return {
      items:[]
    }
  },
   created () {
      let successCallback = (response) => {
          this.items=response.data.data
        }
        let errorCallback = (err) => {
        }
        this.$http.get('/api/game')
                  .then(successCallback, errorCallback)
  },
  mounted(){
      bus.$emit('detail','全部分类')
  }
}
</script>

<style scoped>
#game_kinds{
    width:33%;
    border:1px dashed #000;     
    text-align:center;
    padding:20px 0;
}
img{
  width:100%;
}
p{
    margin-top:10px;
    font-size:20px;
    color:grey;
}

</style>