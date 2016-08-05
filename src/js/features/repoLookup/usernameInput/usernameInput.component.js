import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';

export class UsernameInputComponent extends React.Component {
    static propTypes = {
        repoLookupStore: React.PropTypes.object.isRequired
    };

    @observable input = '';

    @action onChange = event => {
        this.input = event.target.value;
    };

    @action onSubmit = event => {
        event.preventDefault();

        const username = this.input;

        if (username) {
            this.props.repoLookupStore.fetchData(username);
        } else {
            console.error('No Input!');
        }

        this.input = '';
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="ns-username-input-container">
                <input onChange={this.onChange} value={this.input} />
                <button type="submit">Find User</button>
            </form>
        );
    }
}

const ObserverComponent = observer(UsernameInputComponent);

export default provide({ repoLookupStore })(ObserverComponent);
