import '../styles/RepoList.scss';
import RepoItem from './RepoItem';
const RepoList = (props) => {
  console.log(props.data);
  const repoList = props.data.map((repoData) => (
    <li key={repoData.id} className="main__list--card">
      <RepoItem dataList={repoData}/>
    </li>
  ));
  return <ul className="main__list">{repoList}</ul>;
};
export default RepoList;
