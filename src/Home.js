import React from 'react';
import './Home.css';
import Posts from './posts';
import { BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class Home extends React.Component{
render(){
    return(
        <body>
<div class="container-nav">
  <div class="title-bar">
    <div class="toptitle">Home<span>Page</span></div>
  </div>
</div>
<div class="container-homepage">
  <ul class="top-container">
  <NavLink to="/" exact activeStyle={{ color:'green' }}>Home</NavLink>
  <NavLink to="/signup" exact activeStyle={{ color:'green' }}>Sign Up</NavLink>
  <NavLink to="/" exact activeStyle={{ color:'green' }}>About</NavLink>
  </ul>
</div></body>
    )}
}