<template>
    <div>
      <nav-bar class="nav">
        <template v-slot:middle>
          <h2>购物街</h2>
        </template>
      </nav-bar>    
      <swiper
        :slides-per-view="1" 
        :space-between="50" 
        navigation
        autoplay
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper" 
        @slideChange="onSlideChange">
        <swiper-slide v-for="item in banner" :key="item.title">
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
import NavBar from 'components/common/navigatorbar/NavBar.vue'
import { getHomeData } from 'network/home.js'
// 轮播图使用swiper插件 https://www.swiper.com.cn/
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default {
  name: 'Home',
  components: { 
    NavBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      banner: [],
      recommend: []
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    },
  },
  created() {
    getHomeData().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      console.log(res)
    })
  },
};
</script>

<style scoped>
.nav {
  background-color:hotpink;
  color: aliceblue;
}
</style>