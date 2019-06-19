import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Posts from './posts';
import Showposts from './Showposts';
import Showcomments from './Showcomments';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';


function App() {
  return (
    <Router>
      <Route path="/" exact render={() =>{return(<Signup />)}} />
      <Route path="/post" exact render={() =>{return(<Posts />)}} />
      <Route path="/showposts" exact render={() =>{return(<Showposts />)}} />
      <Route path="/showcomments" exact render={() =>{return(<Showcomments />)}} />
    </Router>
  );
 
}

export default App;
