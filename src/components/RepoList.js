import '../styles/RepoList.scss';
import RepoItem from './RepoItem';
const RepoList = (props) => {
  const repoList = props.data.map((repoData) => (
    <li key={repoData.id} className="repo__list--item">
      <RepoItem dataList={repoData} />
    </li>
  ));

  if (repoList.length) {
    return <ul className="repo__list">{repoList}</ul>;
  } else {
    return (
      <p className="repo__list">
        Ups, repository not found at this page
      </p>
    );
  }
};
export default RepoList;
