import React from 'react';
import { Link } from 'react-router';

import styles from './activeLink.comp.scss';

export default class ActiveLink extends React.Component {
    render() {
        return <Link {...this.props} activeClassName={styles.active} />;
    }
}
