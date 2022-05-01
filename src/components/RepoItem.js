import '../styles/RepoItem.scss';
const RepoItem = (props) => {
  let repoLanguage = 'repo__list--item__lang';
  const handleRepoLanguage = () => {
    if (props.dataList.language === 'Not defined') {
      repoLanguage = 'hidden';
    }
    return repoLanguage;
  };
  handleRepoLanguage();
  let repoLicense = 'repo__list--item__license';
  const handleRepoLicense = () => {
    if (props.dataList.license.name === 'None') {
      repoLicense = 'hidden';
    }
    return repoLicense;
  };
  handleRepoLicense();
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
        <p className={repoLanguage}>
          <span className="language_span_label">Main Language</span>
          {props.dataList.language}
        </p>
        <p className={repoLicense}>
          <span className="license_span_label">License</span>
          {props.dataList.license}
        </p>
        <p className="repo__list--item__updated">
          Updated at {props.dataList.updated}
        </p>
      </div>
    </>
  );
};
export default RepoItem;
