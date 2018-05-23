import React from 'react';
import { hot } from 'react-hot-loader';
import Menu from './components/common/Menu';
import Main from './components/Main';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Menu />
                <Main />
            </div>
        );
    }
}

export default hot(module)(App);
