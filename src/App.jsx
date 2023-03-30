import { Icon } from '@iconify/react';

function App() {
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
            <input type="text" placeholder="Procurar username do GitHub" />
            <button type="submit">Search</button>
          </div>
        </div>

        <div className="container user">
          <div className="container-img">
            <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Perfil Image" />
          </div>
          <div className="user-data">
            <div className="user-data__name">
              <h2>The Octocat</h2>
              <span>Joined 25 Jan 2011</span>
            </div>
            <div className="user-data__profile">
              <a href="">@octocat</a>
            </div>
            <div className="user-data__bio">
              <p>This profile have no bio</p> 
            </div>
            <div className="user-data__repo">
              <ul class="user-data__repo__list">
                <li>
                  <h3>Repos</h3>
                  <span>8</span>
                </li>
                <li>
                  <h3>Followers</h3>
                  <span>3938</span>
                </li>
                <li>
                  <h3>Following</h3>
                  <span>9</span>
                </li>
              </ul>
            </div>
            <div className="user-data__repo__social-media">
              <ul>
                <div>
                  <li><Icon className="iconify map-icon" icon="mdi:map-marker" /> San Francisco</li>
                  <li><Icon className="iconify link-icon" icon="mdi:link-box-variant" /> <a href="#">https://github.blog</a></li>
                </div>
                <div>
                  <li><Icon className="iconify twitter-icon" icon="mdi:twitter" /> <a href="#">Not Available</a></li>
                  <li><Icon className="iconify company-icon" icon="mdi:company" /> @github</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
