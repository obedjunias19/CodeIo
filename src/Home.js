import React from 'react';
import './Home.css';
import Posts from './posts';
import {NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

export default class Home extends React.Component{
render(){
    return(
        <body>
<div className ="container-nav">
  <div className ="title-bar">
    <div className="toptitle">Home<span>Page</span></div>
  </div>
</div>
<div className="container-homepage">
  <ul className="top-container">
  <NavLink to="/" exact activeStyle={{ color:'green' }}>Home</NavLink>
  <NavLink to="/signup" exact activeStyle={{ color:'green' }}>Sign Up</NavLink>
  <NavLink to="/showposts" exact activeStyle={{ color:'green' }}>See All Posts</NavLink>
  <NavLink to="/showcomments" exact activeStyle={{ color:'green' }}>See All Comments</NavLink>
  
  </ul>
</div></body>
    )}
}