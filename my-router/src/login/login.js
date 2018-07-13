import React from 'react'

class Login extends React.Component{
    change(){
        this.props.onMyEvent(true);
        console.log("执行了")
    }
    render () {
        let pageName="登陆页面";
        return(
            <div>
                <h1 className="page-header">{pageName}</h1>
                <button className="btn btn-success" onClick={this.change.bind(this)}>登陆</button>
            </div>
        )
    }
}

export default Login;