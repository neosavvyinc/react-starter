import React from 'react';
import UserDisplayComponent from './userDisplay/userDisplay.comp';
import RepoListComponent from './repoList/repoList.comp';
import UsernameInputComponent from './usernameInput/usernameInput.comp';

import styles from './repoLookup.comp.scss';

export default class RepoLookupComponent extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Repo Lookup</h1>
                <UsernameInputComponent />
                <UserDisplayComponent />
                <RepoListComponent />
            </div>
        );
    }
}
