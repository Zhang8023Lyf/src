// 修改redux 里面的 数据 时要调用的方法
export function add (data) {
  console.log('加1')
  //方法里面的写法 要固定
  return {
    type: 'ADD',   //去指定的 reducer  里面的  case 选项 进行逻辑处理
    data
  }

}
export function del (data) {
  console.log('减1')
  //方法里面的写法 要固定
  return {
    type: 'DEL',   //去指定的 reducer  里面的  case 选项 进行逻辑处理
    data
  }

}









