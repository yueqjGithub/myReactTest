import React from 'react'

class CommentForm extends React.Component {
    addobj () {
        // console.log(this)
        let user = this.refs.name.value
        let cont = this.refs.cont.value
        let newCont={id:4,name:user,time:'将才',content:cont}
        // console.log(this.refs.name)通过Refs可以拿到该tag
        console.log(user+"/"+cont)
        this.props.onMyEvent(newCont)
        this.refs.name.value = ''
        this.refs.cont.value = ''
        //父组件给定了一个带形参的事件函数onMyEvent={this.getList.bind(this)},这边通过参数将新的数据传递上去
    }
    render() {
        return (
            <div>
                <h1>评论表单</h1>
                <form>
                    评论人：<input type="text" ref="name"/><br/>
                    内容：<input type="text" ref="cont"/>
                    <button type="button" onClick={this.addobj.bind(this)}>提交</button>
                </form>
            </div>
        )
    }
}

export default CommentForm;