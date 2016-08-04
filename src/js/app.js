import React from 'react';
import { useStrict } from 'mobx';
// globally set mobx to strict mode
useStrict(true);
// while in strict mode, mobx will throw errors if non-actions try to alter any stored state

import '../assets/styles/main.scss';

export default class AppComponent extends React.Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}

AppComponent.propTypes = { children: React.PropTypes.element.isRequired };
