import React from 'react';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';

import styles from './userDisplay.comp.scss';

export class UserDisplayComponent extends React.Component {
    static propTypes = {
        repoLookupStore: React.PropTypes.object.isRequired
    };

    render() {
        const { userData } = this.props.repoLookupStore;
        return (
            <div className={styles.container}>
                {userData ?
                    <div className={styles.displayBox}>
                        <img src={userData.avatar_url} className={styles.profilePic}/>
                        <div className={styles.textbox}>
                            <h4 className={styles.text}>{userData.login}</h4>
                            <h4 className={styles.text}>{userData.name || 'mystery user'}</h4>
                            <h4 className={styles.text}>{`${userData.public_repos} public repos`}</h4>
                        </div>
                    </div>
                    : null
                }
            </div>
        );
    }
}

const ObserverComponent = observer(UserDisplayComponent);

export default provide({ repoLookupStore })(ObserverComponent);
