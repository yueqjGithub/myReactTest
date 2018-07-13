import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component{
    render () {
        const location = window.location
        //eslint-disable-next-line
        console.log(location.pathname)
        //eslint-disable-next-line
        let homeClass=location.pathname.match(/^\/Home/)?"active":""
        //eslint-disable-next-line
        let productClass = location.pathname.match(/^\/ProductList/)?"active":"";
        //eslint-disable-next-line
        let commentClass = location.pathname.match(/^\/Comment/)?"active":"";
        let privateClass = location.pathname.match(/^\/Private/)?"active":"";
        let loginClass = location.pathname.match(/^\/Login/)?"active":"";
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation" className={homeClass}><Link to="/Home">Home</Link></li>
                    <li role="presentation" className={productClass}><Link to="/ProductList">ProductList</Link></li>
                    <li role="presentation" className={commentClass}><Link to="/Comment">Comment</Link></li>
                    <li role="presentation" className={privateClass}><Link to="/Private">Private</Link></li>
                    <li role="presentation" className={loginClass}><Link to="/Login">Login</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav;