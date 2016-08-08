import React from 'react';

export default class MessageBox extends React.Component {
    static propTypes = {
        condition: React.PropTypes.bool.isRequired,
        color: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired
    };

    render() {
        const { condition, color, message } = this.props;

        let containerStyle;

        switch (color) {
            case 'red':
                containerStyle = 'red-message-container';
                break;
            default:
                containerStyle = 'primary-message-container';
        }

        return (
            <div className="ns-message-box-container">
            {
                condition ?
                    <div className={containerStyle}>
                        {message}
                    </div>
                    : null
            }
            </div>
        );
    }
}