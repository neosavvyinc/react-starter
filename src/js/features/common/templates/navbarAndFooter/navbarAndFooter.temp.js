import React from 'react';
import NavbarComponent from '../../components/navbar/navbar.comp';
import FooterComponent from '../../components/footer/footer.comp';

import styles from './navbarAndFooter.temp.scss';

export default class NavbarAndFooterTemplate extends React.Component {
    static propTypes = {
        children: React.PropTypes.element.isRequired
    };

    render() {
        return (
            <div className={styles.container}>
                <NavbarComponent />
                <div className={styles.content}>
                    {this.props.children}
                </div>
                <FooterComponent />
            </div>
        );
    }
}
