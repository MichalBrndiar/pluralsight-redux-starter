import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';

const AboutPage = ({ location: { pathname }, params: { name } }) => {
    return (
        <div>
            <h2>About</h2>
            {location.pathname}<br/>
            <span id="name">{name}</span>
            <TextInput placeholder="Enter something..." />
        </div>
    );
};

AboutPage.propTypes = {
    location: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
};

export default AboutPage;


// export default class AboutPage extends React.Component {
//     render() {
//         const location = this.props.location;
//         const name = this.props.params.name;

//         return (
//             <div>
//                 <h2>About</h2>
//                 {console.log(location)}<br/>
//                 {location.pathname}<br/>
//                 {name}
//             </div>
//         );
//     }
// }