import React, { PropTypes } from 'react';
import Nav from './common/Nav';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="container">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object
};

export default App;