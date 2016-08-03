import UserDisplayComponent from './userDisplay/userDisplay.component';
import RepoListComponent from './repoList/repoList.component';
import UsernameInputComponent from './usernameInput/usernameInput.component';

export default class RepoLookupComponent extends React.Component {
    render() {
        return (
            <div className="ns-repo-lookup">
                <h1>Repo Lookup</h1>
                <UsernameInputComponent />
                <UserDisplayComponent />
                <RepoListComponent />
            </div>
        );
    }
}
