export default class RepoListComponent extends React.Component {
    render() {
        const { repoData } = this.props;
        return (
            <div className="ns-repo-list-container">
                {repoData ?
                    <ul>
                        {
                            repoData.map(repo => {
                                return (<li key={repo.html_url}>
                                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                                    </li>);
                            })
                        }
                    </ul> :
                    null
                }
            </div>
        );
    }
}

RepoListComponent.propTypes = {
    repoData: React.PropTypes.object
};
