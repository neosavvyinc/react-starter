import React from 'react';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';

export class RepoListComponent extends React.Component {
    static propTypes = {
        repoLookupStore: React.PropTypes.object.isRequired
    };

    render() {
        const { repoData } = this.props.repoLookupStore;
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

const ObserverComponent = observer(RepoListComponent);

export default provide({ repoLookupStore })(ObserverComponent);
