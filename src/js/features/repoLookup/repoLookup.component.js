import repoLookupStore from './repoLookup.store';

import UserDisplayComponent from './userDisplay/userDisplay.component';
import RepoListComponent from './repoList/repoList.component';

export default class RepoLookupComponent extends React.Component {
    onSubmit(event) {
        event.preventDefault();
        const username = this.refs.username.value;
        this.refs.username.value = '';
        if (username) {
            repoLookupStore.fetchData(username);
        } else {
            console.error('No Input!');
        }
    }

    render() {
        return (
            <div className="ns-repo-lookup">
                <h1>Repo Lookup</h1>
                <form onSubmit={event => this.onSubmit(event)}>
                    <input ref="username" />
                    <button type="submit">Find User</button>
                </form>
                <UserDisplayComponent />
                <RepoListComponent />
            </div>
        );
    }
}

