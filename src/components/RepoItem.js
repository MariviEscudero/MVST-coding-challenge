import '../styles/RepoItem.scss';

//Rendering component whith the information obtained by fetching API and filter by name
//Data obtained by props

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
          {props.dataList.reponame}{' '}
          <span className="visibility_span_label">
            {props.dataList.visibility}
          </span>
        </h1>
      </a>
      <p className="repo__list--item__desc">{props.dataList.description}</p>
      <div className="repo__list--item__flex">
        <p
          className={
            props.dataList.language === 'Not defined'
              ? 'hidden'
              : 'repo__list--item__language'
          }
        >
          <span className="language_span_label"></span>
          {props.dataList.language}
        </p>
        <p
          className={
            props.dataList.license.name ? 'repo__list--item__license' : 'hidden'
          }
        >
          <span className="license_span_label"></span>
          {props.dataList.license.name}
        </p>
      </div>
    </>
  );
};
export default RepoItem;
