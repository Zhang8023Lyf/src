import React from 'react'
import './gou.css'
export default class Fo extends React.Component{
    constructor(){
        super()
        this.state={
            list:[
                {
                    id:1,
                    img:"./a.png",
                    kk:"可爱童装",
                    color:"颜色-黑色",
                    ma:"尺码-5",
                    tu:"￥ ",
                    price: 5,
                    checked:false
                },
                {
                    id:2,
                    img:"./a.png",
                    kk:"可爱童装",
                    color:"颜色-黄色",
                    ma:"尺码-6",
                    tu:"￥ ",
                    price: 6,
                    checked:false
                },
            ],
            shu:11,
            choose:false
        }
    }
    handleInputChange(e) {
        console.log(e.target.checked)
        if(e.target.checked == true){
            this.state.choose = true
        }else{
            this.state.choose = false
        }
        this.setState({
            list:this.state.list
        })
    }
    componentWillMount(){
        this.state.list.map((item,i)=>{
            item.num = 1
        })
        this.setState({
            list:this.state.list
        }, () => {
            console.log(this.state.list)
        })
    }
    add(id){
        this.state.list.map((jia,index)=>{
            if(jia.id == id){
                jia.num++
            }
            this.setState({
                list:this.state.list
            })
        })
        this.zong()
    }
    jian(id){
        this.state.list.map((jian,index)=>{
            if(jian.id == id){
                jian.num--
                if(jian.num==0){
                    this.state.list.splice(index,1)
                }
            }
            this.setState({
                list:this.state.list
            })
        })
        this.zong()
    }
    zong(){
        this.state.shu=0
        this.state.list.map((ite,i)=>{
            this.state.shu += ite.num*ite.price
        })
        this.setState({
            list:this.state.list
        })
        console.log(this.state.shu)
    }
    render(){
        return(
            <div>
                <h1>购物车</h1>
                <div>
                    <ul>
                        {this.state.list.map((item,i)=>{
                            return(
                                <li className="did" key={i}>
                                    <div className="tr">
                                        <input type="checkbox" checked={this.state.choose}/>   
                                    </div>
                                    <div className="tf">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="td">
                                        <div>{item.kk}</div>
                                        <div>{item.color}</div>
                                        <div>{item.ma}</div>
                                        <div className='tt'>
                                            <span className='ta'>{item.tu} {item.price} </span>
                                            <button className="tg" onClick={this.add.bind(this,item.id)}>+</button>
                                            <span> {item.num} </span>
                                            <button onClick={this.jian.bind(this,item.id)}>-</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <input type="checkbox"  onChange={this.handleInputChange.bind(this)}/>全选
                        总价：{this.state.shu}
                        <button>去结算</button>
                    </div>
                </div>
            </div>
        )
    }
}