import React from 'react'
import './comment.css'

class Comment extends React.Component {
    render () {
        return (
            <div className="comment">
                <h3>name:{this.props.name}</h3>
                <h3>time:{this.props.time}</h3>
                <h3>content:{this.props.children}</h3>
            </div>
        )
    }
}

export default Comment;