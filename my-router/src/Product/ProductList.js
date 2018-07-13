import React from 'react'
import {Link} from 'react-router-dom'

class ProductList extends React.Component {
    constructor(){
        super();
        this.state={
            product:[
                {productname:'产品1',time:'刚刚'},
                {productname:'产品2',time:'三天前'},
                {productname:'产品3',time:'五天前'}
            ]
        }
    }
// <Link to={"/showDetail/"+(index+1)}> 动态路由匹配 /showDetail/:id
    render () {
        let productArr = this.state.product.map((item,index)=>{
            return(
                <div key={index}>
                    <Link to={{pathname:'/showDetail/'+(index+1),query:{name:item.productname,time:item.time}}}>
                        <h2>产品名称：{item.productname}</h2>
                    </Link>
                    <h2>上架时间：{item.time}</h2>
                </div>
            )
        })
        return(
            <div>
                <h1 className="page-header">产品页面 ProductList</h1>
                {productArr}
            </div>
        )
    }
}

export default ProductList;