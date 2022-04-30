import '../styles/UserInfo.scss';
const UserInfo = (props) => {
    return (
      <article>
     <img src= {props.data.avatar} alt="Avatar" />
     <h1>{props.data.username}</h1>
     <h2>{props.data.login}</h2>
     <h3>{props.data.company}</h3>
     <p>{props.data.bio}</p>
      </article>
    );
  };
  export default UserInfo;
  
