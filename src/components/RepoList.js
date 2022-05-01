import '../styles/RepoList.scss';
import RepoItem from './RepoItem';
const RepoList = (props) => {
  const repoList = props.data.map((repoData) => (
    <li key={repoData.id} className="repo__list--item">
      <RepoItem
        dataList={repoData}
        // languageClassName={props.languageClassName}
        // licenseClassName={props.licenseClassName}
      />
    </li>
  ));
  return <ul className="repo__list">{repoList}</ul>;
};
export default RepoList;
