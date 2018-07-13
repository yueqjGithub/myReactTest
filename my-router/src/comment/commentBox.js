import React from 'react'
//导入css文件
import './commentBox.css'
import CommentList from './commentList'
import $ from 'jquery'
import CommentForm from './commentForm'

//定义组件类
//创建组件: 自定义组件继承React.Component
class CommentBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        this.getJson()
    }
    //JSX里不能有Js注释
    //组件同样只能有一个根元素
    getList (newData) {
        console.log(newData)
        let temp0commentArray = this.state.data
        temp0commentArray.push(newData)
        this.setState({data:temp0commentArray})
    }
    getJson () {
        $.ajax({
            // url:this.props.url,
            url:'./commenlist.json',
            dataType: 'json',
            success: comment => {
                this.setState({
                    data: comment
                })
            }
            // success: function (comment) {
            //     this.setState({
            //         data: comment
            //     })
            // }
        })
    }
    render () {
        return(
            <div className="box">
                <h2>{this.props.data3}</h2>
                <h2>react的组件语法，class 组件名 extends(继承) React.Component</h2>
                <CommentList mydata2={this.state.data}></CommentList>
                <CommentForm onMyEvent={this.getList.bind(this)}/>
            </div>
        )
    }
}
//组件写完后需要导出
export default CommentBox;