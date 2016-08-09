import React from 'react';

import styles from './footer.comp.scss';

export default class FooterComponent extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                feet go here
            </footer>
        );
    }
}
