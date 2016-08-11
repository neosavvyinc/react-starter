import React from 'react';

import styles from './home.component.scss';

export default class HomeComponent extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <h1 className={styles.header}>Home</h1>
                <h3>react seed project</h3>
                <h5>courtesy of neosavvy</h5>
                <a href="http://www.neosavvy.com">
                    <img className={styles.logo} src="src/assets/images/logo.png" />
                </a>
            </div>
        );
    }
}
