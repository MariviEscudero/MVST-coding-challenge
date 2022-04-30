//import '../styles/UsersItem.scss';
const UsersItem = (props) => {
  return (
    <>
    <a className="main__list--card__title" href = {props.usersData.url}>{props.usersData.login}</a>
    </>
  );
};
export default UsersItem;
