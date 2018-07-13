import React from 'react'
import Login from '.././login/login'

class Private extends React.Component{
    constructor (){
        super();
        this.state={
            isLogin:false
        }
    }
    changeLog(t){
        this.setState({
            isLogin:t
        })

    }
    render () {
        let pageName="Private页面";
        if(this.state.isLogin){
            console.log(this.state.isLogin)
            return(
                <div>
                    <h1 className="page-header">{pageName}</h1>
                </div>
            )
        }else {
            return(
                <Login onMyEvent={this.changeLog.bind(this)}/>
            )
        }
    }
}

export default Private;