<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"  alt=""/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  // 子组件中定义 data 必须为一个函数
  // data: function() { }  // es5
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 不受 scoped 影响
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 31.25%
    .swiper-img
      width 100%
      height 31.25%
</style>
