import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Container from './components/container';

export default () => {
 return (
	 <Router>
	 		<ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>        
      </ul>

      <hr/>
		<div>
				<Route exact path='/' component={Home}/>											
				<Route exact path='/about' component={Container}/>	
		</div>
   </Router>
 )
}