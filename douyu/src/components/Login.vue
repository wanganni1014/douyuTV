<template>
<div class="container">
<form @submit.prevent>
  <input type="text" class="form-control" placeholder="请输入手机/邮箱" aria-describedby="basic-addon1">
  <input type="text" class="form-control" placeholder="请输入密码" aria-describedby="basic-addon2">
  <br>
  <button>登陆</button>
</form>
</div>
</template>
<script>
import bus from '../bus.js'
export default {
    mounted(){
      bus.$emit('default','斗鱼TV')
  }

}
    
</script>
<style lang="" scoped>
 input,button{
     margin-top:40px;
 }  
 button{
     background-color:orange;
     width:200px;
     height:40px;
     border-radius:3rem;
     display:block;
     margin:0 auto;
     
 }  
</style>