// redux 的核心，数据的声明改变 逻辑处理都在这里
//声明数据
let initState = {
  n: 10
}
//redux 的数据处理逻辑
export default function rootReducers (state = initState, action) {
  //    console.log(action)
  switch (action.type) {
    case "ADD":
      state.n += 5
      return state
    case "DEL":
      state.n--
      if (state.n < 0) {
        state.n = 0
      }
      return state
    default:
      return state
  }
  return state;
}



