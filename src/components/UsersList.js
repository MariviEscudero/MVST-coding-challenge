//import '../styles/UsersList.scss';
import UsersItem from './UsersItem';
const UsersList = (props) => {
  const usersList = props.data.map((usersData) => (
    <li key={usersData.id} className="main__list--card">
      <UsersItem usersData={usersData} text={'repos'} />
    </li>
  ));
  return <ul className="main__list">{usersList}</ul>;
};
export default UsersList;
