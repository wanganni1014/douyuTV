<template>

</template>
<script>
    export default{
        data(){
            return{id:''}
        },
        created(){
            var id = this.$route.query.id
            console.log(id)
            this.$router.replace('/roomlist?id='+id)
        }
    }
</script>