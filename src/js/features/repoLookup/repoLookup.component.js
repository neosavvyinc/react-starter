import React from 'react';
import UserDisplayComponent from './userDisplay/userDisplay.component';
import RepoListComponent from './repoList/repoList.component';
import UsernameInputComponent from './usernameInput/usernameInput.component';

import styles from './repoLookup.component.scss';

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
