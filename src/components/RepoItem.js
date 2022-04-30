import '../styles/RepoItem.scss';
const RepoItem = (props) => {
  return (
    <>
      <h1 className="repo__list--item__name">{props.dataList.reponame}</h1>
      <p className="repo__list--item__desc">{props.dataList.description}</p>
      <p className="repo__list--item__url">{props.dataList.htmlurl}</p>
      <p className="repo__list--item__lang">{props.dataList.language}</p>
      <p className="repo__list--item__license">{props.dataList.license.name}</p>
    </>
  );
};
export default RepoItem;
