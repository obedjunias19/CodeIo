import React from 'react';
import './Signup.css';
import Posts from './posts';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Axios from 'axios';
export default class Signup extends React.Component{
constructor(props){
  super(props);
  this.state = {
    user_name: '',
    user_email: '',
    phone:'',
    user_password:''

  }
}
  loginHandle = (e) => {
    e.preventDefault()
    Axios.post('/posts.js',this.state).then(response=>{console.log(response);} ).catch(err=>{console.log(err)})
    return ( this.state.user_name
    );
}
render(){
  const newpage = this.loginHandle()
  return(<Router><Route path="/post" exact render={() =>{return(<Posts {...newpage} />)}}/></Router>)
}
changeHandle = e =>{
  this.setState({[e.target.name]: e.target.value})
}
    render(){
        return(
          <body>  
            <form action="/posts.js" onSubmit={this.loginHandle.bind(this)}>
            
              <h1>Sign Up</h1>
              
              <fieldset>
      
                <label for="name">Name:</label>
                <input type="text" id="name" name="user_name" value={this.state.user_name} onChange={this.changeHandle} />
                
                <label for="mail">Email:</label>
                <input type="email" id="mail" name="user_email" value={this.state.user_email} onChange={this.changeHandle} />
                <label for="phone">Phone:</label>
                <input type="text" id="phone" value="+91" name="phone" value={this.state.phone} onChange={this.changeHandle} />
                <label for="password">Password:</label>
                <input type="password" id="password" name="user_password" value={this.state.user_password} onChange={this.changeHandle} />
      
              </fieldset>
              <button type="submit" onSubmit={this.loginHandle.bind(this)}>Sign Up</button>
            </form>
            </body>
        )
    }
}
