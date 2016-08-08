import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';
import MessageBox from '../../common/components/messageBox/messageBox.component';

export class UsernameInputComponent extends React.Component {
    static propTypes = {
        repoLookupStore: React.PropTypes.object.isRequired
    };

    @observable input = '';
    @observable isInvalid = false;

    @action onChange = event => {
        this.input = event.target.value;
    };

    @action onSubmit = event => {
        event.preventDefault();

        const username = this.input;

        if (username) {
            this.props.repoLookupStore.fetchData(username);
            this.isInvalid = false;
        } else {
            this.isInvalid = true;
        }

        this.input = '';
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="ns-username-input-container">
                <input
                    onChange={this.onChange}
                    value={this.input}
                    className="username-input"/>
                <button type="submit" className="username-submit">Find User</button>
                <MessageBox
                    condition={this.props.repoLookupStore.isLoading}
                    color="primary"
                    message="Loading..." />
                <MessageBox
                    condition={this.props.repoLookupStore.unknownUser && !this.isInvalid}
                    color="red"
                    message="Unknown User" />
                <MessageBox
                    condition={this.isInvalid}
                    color="red"
                    message="Invalid Input" />
            </form>
        );
    }
}

const ObserverComponent = observer(UsernameInputComponent);

export default provide({ repoLookupStore })(ObserverComponent);
