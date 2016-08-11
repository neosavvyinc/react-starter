import React from 'react';
import ActiveLink from '../activeLink/activeLink.comp';

import styles from './navbar.comp.scss';

export default class NavbarComponent extends React.Component {
    render() {
        return (
            <nav className={styles.navbar}>
                <ul role="nav">
                    <li className={styles.listItem}>
                        <ActiveLink to="/" className={styles.link}
                            onlyActiveOnIndex={true}>
                            Home
                        </ActiveLink>
                    </li>
                    <li className={styles.listItem}>
                        <ActiveLink to="/repoLookup" className={styles.link}>
                            Repo Lookup
                        </ActiveLink>
                    </li>
                </ul>
            </nav>
        );
    }
}
