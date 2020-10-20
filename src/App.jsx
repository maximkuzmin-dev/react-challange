import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import StartPage from './pages/StartPage';
import './App.css';

const users = ['homer', 'bart', 'lisa'];

function App() {
  return (
    <div className="app w-screen h-screen max-h-full flex flex-col mx-auto overflow-hidden">
      <Router>
        <nav className="flex justify-between">
          {users.map((user) => (
            <NavLink className="w-full p-2" to={`/${user}/`} key={user}>
              <div className="w-full flex items-center justify-center h-10 rounded bg-gray-100 font-bold capitalize">
                {user}
              </div>
            </NavLink>
          ))}
        </nav>
        <Switch>
          <Route
            path="/:nickname/:channel"
            render={(props) => (
              <ChatPage
                nickname={props.match.params.nickname}
                channel={props.match.params.channel}
              />
            )}
          />
          <Route
            path="/:nickname/"
            render={(props) => (
              <StartPage nickname={props.match.params.nickname} />
            )}
          />
          <Route render={() => <Redirect to="/homer/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
