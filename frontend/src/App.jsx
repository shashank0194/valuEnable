import './App.css';
import { Nav } from './components/Nav'
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import { Home } from './components/Home';

function App() {
  // setting the value in the localstorage for initial render
  localStorage.setItem("name", "User")
  
  localStorage.setItem("roles", "Dashboard")

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
