import React from 'react';
import './Signup.css';
import Axios from 'axios';
export default class Signup extends React.Component{
constructor(props){
  super(props);
  this.state = {
    _id:'',
    username: '',
    email: '',
    phone:''
  }
}


changeHandle = e =>{
  this.setState({[e.target.name]: e.target.value})
}
submitHandler = e => {
  e.preventDefault()
  var d = {
    _id:this.state._id,
    username: this.state.username,
    email: this.state.email,
    phone:this.state.phone
  }
  
  Axios.post('https://i9ytwm3hb7.execute-api.ap-south-1.amazonaws.com/test/signup', JSON.stringify(d)).then(response => {
      console.log(response);
      console.log(response.data);
      alert('Succesfully Signed Up');
      window.location = "post";
    }).catch(error => {
      console.log(error)
    })
}
    render(){
        return(
          <body>  
            <form  onSubmit={this.submitHandler.bind(this)}>
            
              <h1>Sign Up</h1>
              
              <fieldset>
              <label for="uid">User Id:</label>
                <input type="text" id="password" name="_id" value={this.state._id} onChange={this.changeHandle} />
                <label for="name">Name:</label>
                <input type="text" id="name" name="username" value={this.state.username} onChange={this.changeHandle} />
                
                <label for="mail">Email:</label>
                <input type="email" id="mail" name="email" value={this.state.email} onChange={this.changeHandle} />
                <label for="phone">Phone:</label>
                <input type="text" id="phone"  name="phone" value={this.state.phone} onChange={this.changeHandle} />
                
      
              </fieldset>
              <button type="submit" className="submitbutton" >Sign Up</button>
            </form>
            </body>
        )
    }
}
