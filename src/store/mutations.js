// 更改 Vuex 的 store 中状态的唯一方法是提交 mutation

export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}
