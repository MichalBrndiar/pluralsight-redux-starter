import React, {PropTypes} from 'react';

class TextInput extends React.Component {
    render() {
        const { placeholder } = this.props;

        return (
            <div>
                <input type='text' placeholder={placeholder} />
            </div>
        );
    }
}

TextInput.propTypes = {
    placeholder: PropTypes.object
};

export default TextInput;