<template>
  <div class="home-page">
    <home-header/>
    <home-swiper :list="swiperList"/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import Swiper from './Swiper'
export default {
  data () {
    return {
      swiperList: []
    }
  },
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper
  },
  mounted () {
    axios.get('/static/mock/index.json')
    .then(res => {
      if(res.data) {
        this.swiperList = res.data.data.swiperList
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/varlable';
.home-page {
  background: $homeBgColor;
}
</style>