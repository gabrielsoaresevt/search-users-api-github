import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'

export function App() {

  const [searchUser, setSearchUser] = useState('')
  const [userName, setUserName] = useState('gabrielsoaresevt')
  const [user, setUser] = useState({})

  function monthAbbreviation(month) {
    let abbreviation = "";
    switch(month) {
      case "01":
        abbreviation = "Jan."
        break;
      case "02":
        abbreviation = "Fev."
        break;
      case "03":
        abbreviation = "Mar."
        break;
      case "04":
        abbreviation = "Abr."
        break;
      case "05":
        abbreviation = "Maio"
        break;
      case "06":
        abbreviation = "Jun."
        break;
      case "07":
        abbreviation = "Jul."
        break;
      case "08":
        abbreviation = "Ago."
        break;
      case "09":
        abbreviation = "Set."
        break;
      case "10":
        abbreviation = "Out."
        break;
      case "11":
        abbreviation = "Nov."
        break;
      case "12":
        abbreviation = "Dez."
      }  

    return abbreviation;
  }

  function stringFormat(data) {
    let splitData = data.split("T")
    let newDataFormat = splitData[0].split("-")
    let year = newDataFormat[0]
    let month = newDataFormat[1]
    let day = newDataFormat[2]

    return `Ingressou em ${day} de ${monthAbbreviation(month)} de ${year}`
  }

  function isUndefined(string) {
    let message = ""
    if(string === undefined) {
      message = "Não disponível"
    } else {
      message = string
    }

    return message
  }

  function handleSearchUser() {
    setUserName(searchUser);
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {
        setUser({
          name: data.name,
          login: `@${data.login}`,
          html_url: data.html_url,
          avatar: data.avatar_url,
          created: stringFormat(data.created_at),
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location,
          blog: isUndefined(user.blog),
          twitter: isUndefined(user.twitter),
          company: isUndefined(user.company)
        })
      })
      .catch(e => console.log(e))
  }, [userName])  

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>devfinder</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="input-box">
            <Icon className="iconify search-icon" icon="material-symbols:search-rounded" />
            <input onChange={e => setSearchUser(e.target.value)} type="text" placeholder="Procurar username do GitHub" />
            <button onClick={handleSearchUser}>Search</button>
          </div>
        </div>

        <div className="container user">
          <div className="container-img">
            <img src={user.avatar} alt="Perfil Image" />
          </div>
          <div className="user-data">
            <div className="user-data__name">
              <h2>{user.name}</h2>
              <span>{user.created}</span>
            </div>
            <div className="user-data__profile">
              <a href={user.html_url}>{user.login}</a>
            </div>
            <div className="user-data__bio">
              <p>{user.bio}</p> 
            </div>
            <div className="user-data__repo">
              <ul className="user-data__repo__list">
                <li>
                  <h3>Repos</h3>
                  <span>{user.repos}</span>
                </li>
                <li>
                  <h3>Followers</h3>
                  <span>{user.followers}</span>
                </li>
                <li>
                  <h3>Following</h3>
                  <span>{user.following}</span>
                </li>
              </ul>
            </div>
            <div className="user-data__repo__social-media">
              <ul>
                <div>
                  <li><Icon className="iconify map-icon" icon="mdi:map-marker" />{user.location}</li>
                  <li><Icon className="iconify link-icon" icon="mdi:link-box-variant" /> <a href={user.blog}>{user.blog}</a></li>
                </div>
                <div>
                  <li><Icon className="iconify twitter-icon" icon="mdi:twitter" /> <a href={user.twitter}>{user.twitter}</a></li>
                  <li><Icon className="iconify company-icon" icon="mdi:company" />{user.company}</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}