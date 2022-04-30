import '../styles/RepoItem.scss';
const RepoItem = (props) => {
  console.log(props.dataList);
    return (
      <>
        <h1 className="main__list--card__title">{props.dataList.reponame}</h1>
        <p>{props.dataList.description}</p>
        <p>{props.dataList.htmlurl}</p>
        <p>{props.dataList.language}</p>
        <p>{props.dataList.license.name}</p>

      </>
    );
};
export default RepoItem;
