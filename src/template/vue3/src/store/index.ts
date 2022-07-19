import { defineStore } from 'pinia'

// useStore 可以是任意名称，比如useUser，useCart。
// 第一个参数是你的应用程序中 Store 的唯一 ID。
export const useStore = defineStore('main', {
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      counter: 100
    }
  },
  actions: {
    addCount () {
      this.counter++
    }
  }
})
