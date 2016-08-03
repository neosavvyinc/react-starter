import { observer } from 'mobx-react';
import repoLookupStore from '../repoLookup.store';

export default @observer class RepoListComponent extends React.Component {
    render() {
        const { repoData } = repoLookupStore;
        return (
            <div className="ns-repo-list-container">
                <ul>
                    {
                        repoData.map(repo => {
                            return (
                                <li key={repo.name}>
                                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
