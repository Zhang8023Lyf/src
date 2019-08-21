// reducers :redux 的核心，数据的声明改变 逻辑处理都在这里
// 声明数据
let initState = {
    shopCarArr:[]
}
// redux  的数据处理逻辑
export default function rootReducers(state=initState,action){
    switch(action.type){
        case 'ADDCAR':
            state.shopCarArr.push(action.data)
            return state;

        default:
           return state
    }
    return state;


}


