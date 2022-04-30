import '../styles/RepoList.scss';
import RepoItem from './RepoItem';
const RepoList = (props) => {
  console.log(props.data);
  const repoList = props.data.map((repoData) => (
    <li key={repoData.id} className="repo__list--item">
      <RepoItem dataList={repoData} />
    </li>
  ));
  return <ul className="repo__list">{repoList}</ul>;
};
export default RepoList;
