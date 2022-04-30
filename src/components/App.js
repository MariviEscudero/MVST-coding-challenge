import { useState, useEffect } from 'react';
import '../styles/App.scss';
import UserInfo from './UserInfo';
import RepoList from './RepoList';
import FilterByName from './FilterByName';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [reposInfo, setReposInfo] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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
              description:
                dat.description === null ? 'Unknown' : dat.description,
              language: dat.language === null ? 'Unknown' : dat.language,
              visibility: dat.visibility === null ? 'Unknown' : dat.visibility,
              license: dat.license === null ? 'Unknown' : dat.license,
            };
          });
          setReposInfo(filteredRepos);
        });
    }
  }, [userData]);

  //console.log(userData);
  //console.log(reposInfo);

  const handleSearchInput = (value) => {
    setSearchInput(value);
  };

  const filteredRepo = reposInfo.filter((repo) =>
    repo.reponame.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <UserInfo data={userData} />
      <FilterByName
        handleSearchInput={handleSearchInput}
        inputValue={searchInput}
      />
      <RepoList data={filteredRepo} />
    </div>
  );
};
export default App;
