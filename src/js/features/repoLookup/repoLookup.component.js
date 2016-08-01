import { observer } from 'mobx-react';

import repoLookupStore from './repoLookup.store';

import UserDisplayComponent from './userDisplay/userDisplay.component';
import RepoListComponent from './repoList/repoList.component';

@observer class RepoLookupComponent extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const username = this.refs.username.value;
        this.refs.username.value = '';
        if (username) {
            repoLookupStore.getUserData(username);
        } else {
            console.error('No Input!');
        }
    }

    render() {
        const { userData, repoData } = repoLookupStore;
        return (
            <div className="ns-repo-lookup">
                <h1>Repo Lookup</h1>
                <form onSubmit={event => this.onSubmit(event)}>
                    <input ref="username" />
                    <button type="submit">Find User</button>
                </form>
                <UserDisplayComponent userData={userData} />
                <RepoListComponent repoData={repoData} />
            </div>
        );
    }
}

export default RepoLookupComponent;
