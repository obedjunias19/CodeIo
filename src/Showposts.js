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
        <body>
        <div>
           <h1> List of posts </h1>
            {posts.length
                ? posts.map(post =><div> <div key={post.id} id="list"><ul><div className='Para'><p>This is the Post with Id number: {post.id}</p></div><li>{post.body}</li></ul><br /></div><br /></div>)
      : null}
    {errorMsg ? <div>{errorMsg}</div> : null}
        </div></body>
    )
}
}

