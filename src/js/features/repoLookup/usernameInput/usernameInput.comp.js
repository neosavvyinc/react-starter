import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';
import MessageBox from '../../common/components/messageBox/messageBox.comp';

import styles from './usernameInput.comp.scss';

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
            <form onSubmit={this.onSubmit} className={styles.container}>
                <input
                    onChange={this.onChange}
                    value={this.input}
                    className={styles.input}/>
                <button type="submit" className={styles.button}>Find User</button>
                <MessageBox
                    condition={this.props.repoLookupStore.isLoading}
                    type="success"
                    message="Loading..." />
                <MessageBox
                    condition={this.props.repoLookupStore.unknownUser && !this.isInvalid}
                    type="error"
                    message="Unknown User" />
                <MessageBox
                    condition={this.isInvalid}
                    type="error"
                    message="Invalid Input" />
            </form>
        );
    }
}

const ObserverComponent = observer(UsernameInputComponent);

export default provide({ repoLookupStore })(ObserverComponent);
