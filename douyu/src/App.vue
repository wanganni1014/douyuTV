<template>
  <div id="app">
    <siderbar-header :titleMsg="msg"></siderbar-header>
    <router-view></router-view> 
  </div>
</template>

<script>
import bus from './bus.js'
import SiderbarHeader from './components/SiderbarHeader'
export default {
  name: 'app',
  data(){
    return {
      msg:''
    }
  },
  components:{
    SiderbarHeader
  },
  created(){
    var self = this
    bus.$on('detail',function(value){
      self.msg = value
    }),
    bus.$on('default',function(value){
      self.msg = value
    })
  }
}
</script>

<style>

</style>