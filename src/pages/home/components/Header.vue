<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 使用 mapState 辅助函数 以及 对象展开运算符 ...
    // 将对象混入到外部对象中
    ...mapState(['city'])
  }
}
</script>

<!-- scoped 保证css只对当前组件有效 -->
<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  // rest.css font-sze 设置为 50px
  // 1rem = html font-size = 50px
  // 86(设计)/100  方便rem计算
  .header
    display flex
    line-height .86rem
    background $bgColor
    color #ffffff
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left: .2rem
      padding-left .2rem
      background #ffffff
      border-radius .1rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      float right
      text-align center
      color #fff
      .arrow-icon
        margin-left -0.04rem
        font-size .24rem
</style>
