import React from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import provide from 'mobx-provide';
import repoLookupStore from '../repoLookup.store';

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
                <input onChange={this.onChange} value={this.input} />
                <button type="submit">Find User</button>
                {
                    this.props.repoLookupStore.isLoading ?
                        <div className="loading-container">
                            Loading...
                        </div>
                        : null
                }
                {
                    this.props.repoLookupStore.unknownUser ?
                        <div className="error-container">
                            Unknown User
                        </div>
                        : null
                }
                {
                    this.isInvalid ?
                        <div className="error-container">
                            Invalid Input
                        </div>
                        : null

                }
            </form>
        );
    }
}

const ObserverComponent = observer(UsernameInputComponent);

export default provide({ repoLookupStore })(ObserverComponent);
