<template>
 <section>
    <index></index>
    <main>
        <div>
        <router-link to="/">
            <span>首页</span>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </router-link>
        </div>
        <hr>
        <div>
        <router-link to="/kinds">
            <span>全部分类</span>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </router-link>
        </div>
        <hr>
        <div>
           <router-link to="/developing">
            <span>推荐</span>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </router-link>
        </div>
        <hr>
        <div>
           <router-link to="/Login">
            <span>个人中心</span>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </router-link>
        </div>
        <hr>
    </main>
    </section>
</template>
<script>
import Index from './Index'
    export default{
        components:{index:Index}
    }
</script>
<style scoped>
    main{
        width:60%;
        height:850px;
        background-color:#222;
        position:absolute;
        z-index:999;
        top:51px;
    }
    div{
        font-size:16px;
        height:35px;
        line-height:35px;
    }
    a{
        color:white !important;
    }
    hr{
        background-color:#aaa;
    }
    div span:nth-of-type(1){
        float:left;
    }
    div span:nth-of-type(2){
        float:right;
        margin-top:20px;
    }
    
</style>