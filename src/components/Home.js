import React from 'react';
import { connect } from 'react-redux';
import Label from 'react-bootstrap/lib/Label';

const mapStateToProps = state => ({ state });

const Home = ({ state }) => {
    console.log(state);

    return (
        <div>
            <Label bsStyle="success">Home</Label>
        </div>
    );
};

export default connect(mapStateToProps)(Home);
