import React from 'react'
import Comment from './comment'

class CommentList extends React.Component {
    render () {
        let ask= 'rng';
        console.log(this.props.mydata2);
        let CommentArray = this.props.mydata2.map(com=>{
            return (
                <Comment key={com.id} name={com.name} time={com.time}>{com.content}</Comment>
                )
        });
        return (
            <div>
                <h2>{ask}</h2>
                <h1>评论列表</h1>
                {CommentArray}
            </div>
        )
    }
}

export default CommentList;