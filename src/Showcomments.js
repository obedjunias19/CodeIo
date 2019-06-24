import React from 'react';
import './Showposts.css';
import Axios from 'axios';
export default class Showcomments extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
      comments: [],
      errorMsg: ''
		}
}

componentDidMount(){
Axios.get('https://i9ytwm3hb7.execute-api.ap-south-1.amazonaws.com/test/signup/posts/comments').then(response => {this.setState({comments:response.data})}).catch(err => {this.setState({errorMsg:err})})
}
render() {
    const { comments, errorMsg } = this.state
    return (
        <body>
        <div>
            <h1>List of Comments</h1>
            {comments.length
                ? comments.map(comment =><div> <div key={comment.id} id="list"><ul><div className='Para'><p>Comment Title:  {comment.name}</p><p> Id number is {comment.id}</p><p>User's email is {comment.email}</p></div><li>Comment: <br />{comment.body}</li></ul><br /></div><br /></div>)
      : null}
    {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
        </body>
    )
}
}

