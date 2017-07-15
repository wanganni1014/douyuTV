<template>
  <div class="side">
    <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-header">
                <router-link to="/siderbar" class="navbar-brand" id="navbar-brand">
                <span></span>
                <span></span>
                <span></span>
                </router-link>
                <div class="navbar-brand">{{titleMsg}}</div>
                <router-link to="/login" class="glyphicon glyphicon-user" aria-hidden="true"></router-link> 
            </div> 
    </nav>
  </div>
</template>
<script>
export default {
  props:{
    titleMsg:{
      type:String,
      default:'斗鱼TV'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side{
  height:51px;
}
nav{
  position:relative;
}
#navbar-brand>span{
  display:inline-block;
  width:20px;
  height:2px;
  background-color:white;
}
span:nth-of-type(1){
  position:absolute;
  top:15px;
  }
  span:nth-of-type(2){
  position:absolute;
  top:25px;
  }
  span:nth-of-type(3){
  position:absolute;
  top:35px;
  }
  .navbar-brand{
    margin-left:50px;
  }
  .glyphicon-user{
    color:white;
    width:40px;
    height:40px;
    position:absolute;
    right:0;
    margin-top:20px;
  }
</style>
