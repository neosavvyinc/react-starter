import '../assets/styles/main.scss';

export default class AppComponent extends React.Component {
    render() {
        return (<div>{this.props.children}</div>);
    }
}

AppComponent.propTypes = { children: React.PropTypes.element.isRequired };
