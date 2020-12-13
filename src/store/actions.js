// action 提交的是 mutation 而不直接变更状态
// action 可以包含任何异步操作

export default {
  changeCity (context, city) {
    // console.log(city)
    context.commit('changeCity', city)
  }
}
