import React from 'react';
import { hot } from 'react-hot-loader'
import Header from './components/Header';
import Main from './components/Main';

export class App extends React.Component {
	render() {
	  
	  return (
			<div>
				<Header />
				<Main />
		</div>
	  );
	}
}

export default hot(module)(App);
