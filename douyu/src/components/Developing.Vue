<template>
<p>该页面正在开发中。。。</p>
</template>
<script>
    import bus from '../bus.js'
    export default {
    mounted(){
      bus.$emit('default','斗鱼TV')
  }
}
</script>
<style scoped>
p{
    font-size:20px;
    width:220px;
    margin:200px auto;
}
    
</style>