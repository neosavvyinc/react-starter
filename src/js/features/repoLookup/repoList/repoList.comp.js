import React from 'react';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';

import styles from './repoList.comp.scss';

export class RepoListComponent extends React.Component {
    static propTypes = {
        repoLookupStore: React.PropTypes.object.isRequired
    };

    render() {
        const { repoData } = this.props.repoLookupStore;
        return (
            <div className={styles.container}>
                <ul className={styles.list}>
                    {
                        repoData.map(repo => {
                            return (
                                <li key={repo.name} className={styles.listItem}>
                                    <a href={repo.html_url} target="_blank"
                                        className={styles.link}>
                                        {repo.name}
                                    </a>
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
