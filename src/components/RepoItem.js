import '../styles/RepoItem.scss';
const RepoItem = (props) => {
  return (
    <>
      <a
        className="repo__list--item__link"
        href={`${props.dataList.htmlurl}`}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="repo__list--item__link--name">
          {props.dataList.reponame}
        </h1>
      </a>
      <p className="repo__list--item__desc">{props.dataList.description}</p>
      <div className="repo__list--item__flex">
        <p className="repo__list--item__lang">
          <span className="language_span_label">Main Language</span>
          {props.dataList.language}
        </p>
        <p className="repo__list--item__license">
          <span className="license_span_label">License</span>
          {props.dataList.license.name}
        </p>
        <p className="repo__list--item__updated">
          Updated at {props.dataList.updated}
        </p>
      </div>
    </>
  );
};
export default RepoItem;
