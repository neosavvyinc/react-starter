import React from 'react';

import styles from './messageBox.comp.scss';

export default class MessageBox extends React.Component {
    static propTypes = {
        condition: React.PropTypes.bool.isRequired,
        type: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired
    };

    render() {
        const { condition, type, message } = this.props;

        let containerStyle;

        switch (type) {
            case 'error':
                containerStyle = styles.error;
                break;
            default:
                containerStyle = styles.success;
        }

        return (
            <div className={styles.container}>
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