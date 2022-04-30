import '../styles/UserInfo.scss';
const UserInfo = (props) => {
  return (
    <div className="grid">
      <article className="user__info">
        <img className="user__info--img" src={props.data.avatar} alt="Avatar" />
        <h1 className="user__info--name">{props.data.username}</h1>
        <h2 className="user__info--login">{props.data.login}</h2>
        <h3 className="user__info--company">{props.data.company}</h3>
        <p className="user__info--bio">{props.data.bio}</p>
      </article>
    </div>
  );
};
export default UserInfo;
