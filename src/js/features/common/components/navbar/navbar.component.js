import ActiveLink  from '../activeLink/activeLink.component';

export default class NavbarComponent extends React.Component {
    render () {
        return (
            <nav className="ns-navbar">
                <ul role="nav">
                    <li><ActiveLink to="/" onlyActiveOnIndex={true}>Home</ActiveLink></li>
                    <li><ActiveLink to="/repoLookup">Repo Lookup</ActiveLink></li>
                </ul>
            </nav>
        )
    }
}
