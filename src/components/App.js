import { useState, useEffect } from 'react';
import '../styles/App.scss';
import UserInfo from './UserInfo';
import RepoList from './RepoList';
import SearchField from './SearchField';

const App = () => {
  //Data user useState
  const [userData, setUserData] = useState([]);

  //User repos information useState
  const [reposInfo, setReposInfo] = useState([]);

  //useState of input text typing to find a repo
  const [searchInput, setSearchInput] = useState('');

  // Hook useEffect to obtain API REST user data when the app is initialized
  //API url for a Json users list: https://api.github.com/users
  //API url for an only user list: https://api.github.com/users/{user}

  useEffect(() => {
    fetch(`https://api.github.com/users/MariviEscudero`)
      .then((res) => res.json())
      .then((data) => {
        let userData = {
          login: data.login === null ? 'Unknown' : data.login,
          avatar: data.avatar_url === null ? 'Unknown' : data.avatar_url,
          username: data.name === null ? 'Unknown' : data.name,
          company: data.company === null ? 'Unknown' : data.company,
          bio: data.bio === null ? 'Unknown' : data.bio,
          repos: data.repos_url === null ? 'Unknown' : data.repos_url,
        };
        setUserData(userData);
      });
  }, []);

  //Hook useEffect to obtain Json of listed repositories of the user obtained before
  //Is necessary the data.repos_url to make the consult to API, and
  //Is necessary to start the useEffect after the previous, with }, [userData]);

  useEffect(() => {
    if (userData.repos) {
      fetch(userData.repos)
        .then((res) => res.json())
        .then((data) => {
          const filteredRepos = data.map((dat) => {
            return {
              id: dat.id,
              reponame: dat.name === null ? 'Unknown' : dat.name,
              htmlurl: dat.html_url === null ? 'Unknown' : dat.html_url,
              description: dat.description === null ? '' : dat.description,
              language: dat.language === null ? 'Not defined' : dat.language,
              visibility: dat.visibility === null ? 'Unknown' : dat.visibility,
              license: dat.license === null ? 'None' : dat.license,
            };
          });
          setReposInfo(filteredRepos);
        });
    }
  }, [userData]);

  //This function catch input value to use it to filter by it

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  //Filtering repo by name

  const filteredRepo = reposInfo.filter((repo) =>
    repo.reponame.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  //Rendering of the imported App components

  return (
    <div className="App">
      <UserInfo data={userData} />
      <SearchField
        handleSearchInput={handleSearchInput}
        inputValue={searchInput}
      />
      <RepoList data={filteredRepo} />
    </div>
  );
};
export default App;
