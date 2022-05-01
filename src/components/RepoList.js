import '../styles/RepoList.scss';
import RepoItem from './RepoItem';

//The component render a list of li inside an ul label

const RepoList = (props) => {
  const repoList = props.data.map((repoData) => (
    <li key={repoData.id} className="repo__list--item">
      <RepoItem dataList={repoData} />
    </li>
  ));

  //Rendering of repos list searched by the text input, with error message if repository is not found

  if (repoList.length) {
    return <ul className="repo__list">{repoList}</ul>;
  } else {
    return <p className="repo__list">Ups, repository not found at this page</p>;
  }
};
export default RepoList;
