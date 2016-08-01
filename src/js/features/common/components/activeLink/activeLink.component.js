import { Link } from 'react-router'

export default class ActiveLink extends React.Component {
    render() {
        return <Link {...this.props} activeClassName="ns-active-link"/>
    }
};
