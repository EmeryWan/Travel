<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
          >
            <div class="button" @click="handleCityClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--  所有城市列表  -->
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 将 this.$store.state.city 映射为 currentCity  再结构到 computed 中
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const temp = this.letter.trim()
        // refs 获取的是循环的数据 是一个数组  this.$refs[this.letter]
        const element = this.$refs[temp][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      // 利用 dispatch 调用 action
      // this.$store.dispatch('changeCity', city)
      // 利用 commit 直接调用 mutations
      // this.$store.commit('changeCity', city)
      // 使用 mapActions 的方法
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将 名为 changeCity 的 actions 解构到 methods 中
    ...mapActions(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  updated () {
    // 防止 better-scroll 失效
    // axios 异步读取数据 可能在数据读取完成前 mounted() 已经完成
    // 导致子元素高度小于父元素高度 滚动失效
    this.scroll.refresh()
  },
  activated () {
    this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl";
  .border-topbottom
    &:before
      border-color #777
    &:after
      border-color #777
  .border-bottom
    &:before
      border-color #777
  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          margin: .1rem
          padding .1rem 0
          border: .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
