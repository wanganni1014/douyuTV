<template>
    <div id="app">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in items">
                  <router-link :to="{ path:'/room',query: {room_id:item.room_id}}">
                    <img class="imgload" :src=item alt="首页banner图片01">
                  </router-link>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import '../swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    this.getIndexLive()
  },
  methods: {
    getIndexLive () {
      const self = this
      let successCallback = (response) => {
        var arr = response.data.data
        for (var i = 0; i < arr.length; i++) {
          self.items.push(arr[i].room_src)
        }
        self.$nextTick(function () {
          var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            speed: 600,
            autoplay: 2000,
            onTouchEnd: function () {
              mySwiper.startAutoplay()
            }
          })
        })
      }
      self.$http.get('/api/live?offset=50&limit=5').then(successCallback)
    }
  }
}
</script>
<style scoped>
.imgload {
    width: 100%;
    height: 100%;
    cursor: pointer;
}
.swiper-container{
  margin:10px;
  border-radius:5px;
}
</style>
