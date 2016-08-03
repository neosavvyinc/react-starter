import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import repoLookupStore from '../repoLookup.store';

export default @observer class UsernameInputComponent extends React.Component {
    @observable input = '';

    @action onChange = event => {
        this.input = event.target.value;
    };

    @action onSubmit = event => {
        event.preventDefault();
        const username = this.input;
        if (username) {
            repoLookupStore.fetchData(username);
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
