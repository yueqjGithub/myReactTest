import React, { Component } from 'react';
//引入路由
// eslint-disable-next-line
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'
import CommentBox from './comment/commentBox'
import Nav from './nav/nav'
import Home from './Home/Home'
import ProductList from './Product/ProductList'
import ProductDetail from './Product/showDetail'
import Private from './private/private'
import Login from './login/login'
// import logo from './logo.svg';
// import './App.css';
//Router 整个大的路由模块，只能有一个子节点
//Route 路由配置，path='/进来的路径' component= {要显示的组件}
//Link 取代a标签 to='/跳到哪个位置'
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Nav/>
                <Redirect to="/Home"/>
                <Route path="/Comment" component={CommentBox}></Route>
                <Route path="/Home" component={Home}></Route>
                <Route path="/ProductList" component={ProductList}></Route>
                <Route path="/Private" component={Private}></Route>
                <Route path="/Login" component={Login}></Route>
                <Route path="/showDetail/:id" component={ProductDetail}></Route>
            </div>
        </Router>
    );
  }
}

export default App;
