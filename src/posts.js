import React from 'react';
import './Signup.css';
import './Home.css';
import Axios from 'axios';
import {NavLink} from 'react-router-dom';
export default class Posts extends React.Component{
  constructor(props) {
		super(props)

		this.state = {
			id: '',
			title: '',
			body: ''
		}
}
changeHandler  = e =>{
  this.setState({ [e.target.name]: e.target.value })
}
submitHandler = e => {
  e.preventDefault()

  Axios.post('https://i9ytwm3hb7.execute-api.ap-south-1.amazonaws.com/test/signup/posts', this.state).then(response => {
      console.log(response);
      alert('Your Post Was Posted...');
      window.location = "comment";
    }).catch(error => {
      console.log(error)
    })
}
render(){
  const { userId, title, body } = this.state
  return(
      <div className ="container-nav">
          
         <button type="button" className="linkbutton"><NavLink  to="/" exact activeStyle={{ color:'green' }}>Home</NavLink></button>&nbsp;
         <button type="button" className="linkbutton"><NavLink to="/showposts" exact activeStyle={{ color:'green' }}>See All Posts</NavLink></button> 
        <form  onSubmit={this.submitHandler}>  
        <h1>Post It Here...!!</h1>
              <fieldset>
                <label htmlFor="id">UserId:</label>
                <input type="text" id="uid" name="id" value={userId} onChange={this.changeHandler.bind(this)} />
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={this.changeHandler.bind(this)} />
                <label htmlFor="body">Post:</label>
                <textarea rows="4" cols="50" name= "body" value={body} onChange={this.changeHandler.bind(this)}></textarea>
              </fieldset>
              <button type="submit" className="submitbutton" >Post</button>
        </form>
        </div>
    )
}
}