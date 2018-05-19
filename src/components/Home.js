import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps =(state) => ({state});

const Home = ({state}) => {
	console.log(state);
	return (
		<div>Home</div>
	);
}

export default connect(mapStateToProps)(Home);