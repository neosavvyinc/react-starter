import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';

export class UserDisplayComponent extends React.Component {
    static propTypes = {
        repoLookupStore: React.PropTypes.object.isRequired
    };

    render() {
        const { userData } = this.props.repoLookupStore;
        return (
            <div className="ns-user-display-container">
                {userData ?
                    <div className="content-container">
                        <img src={userData.avatar_url}/>
                        <div className="textbox">
                            <h4>{userData.login}</h4>
                            <h4>{userData.name || 'mystery user'}</h4>
                            <h4>{`${userData.public_repos} public repos`}</h4>
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
