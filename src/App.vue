<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

let swiperRef = $ref(null)
const swiperOption = $ref({
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
const onSwipeRight = () => {
  console.log('onSwipeRight')
}
const onPinch = () => {
  console.log('onPinch')
}
const onSwiper = (swiper) => {
  swiperRef = swiper
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>

<template>
  <div v-hammer:swipe.right="onSwipeRight" v-hammer:pinch="onPinch">
    <swiper
      :controller="{ control: swiperMemorandum }"
      :centered-slides="swiperOption.centeredSlides"
      :autoplay="swiperOption.autoplay"
      :pagination="swiperOption.pagination"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>
        <img alt="Vue logo" src="./assets/logo.png" />
      </swiper-slide>
      <swiper-slide>
        <img alt="Vue logo" src="./assets/logo.png" />
      </swiper-slide>
      <swiper-slide>
        <img alt="Vue logo" src="./assets/logo.png" />
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.swiper-pagination {
  text-align: center;
  bottom: 0 !important;
}
</style>
