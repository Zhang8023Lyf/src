import React from 'react';
import * as ActionEvent from './action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ShopCar from './ShopCar';

 class Home extends React.Component{
    constructor(){
        super();
        this.state={
            list:[{title:'奔驰',price:3500000},{title:'奔驰c200',price:3600000},{title:'奔驰c260',price:4500000}]
        }
    }
    addCar(item){
        // 加入到 redux 里面
        
        this.props.actionEvent.addCar(item)
        console.log(this.props.reduxData)
    }
    render(){
        return(
            <div>
                <ul>
                {this.state.list.map((item,index)=>{
                    return(
                        <li key={index}>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <p>
                                <button onClick={()=>{this.addCar(item)}}>加入购物车</button>
                            </p>
                        </li>
                        
                    )
                })}
                </ul>
               <hr/>
               <ShopCar ></ShopCar>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        reduxData:state
    }
}
function mapDispatchToProps(dispatch){
    return{
        actionEvent:bindActionCreators(ActionEvent,dispatch)
    }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(Home)