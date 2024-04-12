export default {
  namespace: "global",
  state: {
    title: "全局title",
    text: "全局text",
    login: false,
    a: "全局models aaa",
  },
  reducers: {
    setText(state){
      return {
        ...state, text: "全局设置后的 text" + Math.random().toFixed(2)
      }
    },
    setTitle(state, action){
      return {
        ...state, title: `全局设置后的 title${action.payload.a}/${action.payload.b}`
      }
    }
  }
}