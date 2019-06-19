import React from 'react';
import './Showposts.css';
import Axios from 'axios';
export default class ShowPosts extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
      posts: [],
      errorMsg: ''
		}
}

componentDidMount(){
Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {this.setState({posts:response.data})}).catch(err => {this.setState({errorMsg:err})})
}
render() {
    const { posts, errorMsg } = this.state
    return (
        <div>
            List of posts
            {posts.length
                ? posts.map(post => <div key={post.id} id="list"><ul><p>This is the Post with Id number: {post.id}</p><li>{post.body}</li></ul></div>)
      : null}
    {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
    )
}
}

