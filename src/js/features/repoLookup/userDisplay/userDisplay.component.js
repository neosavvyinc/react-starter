import { observer } from 'mobx-react';
import repoLookupStore from '../repoLookup.store';

export default @observer class UserDisplayComponent extends React.Component {
    render() {
        const { userData } = repoLookupStore;
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
                    </div> :
                    null
                }
            </div>
        );
    }
}
