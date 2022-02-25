import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from "react-router";
import { createBrowserHistory } from 'history';
import DefaultLayout from './Containers'
import Login from './Pages/Login'
const history = createBrowserHistory();
window.reactRouter = history;
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/index" />} />
        <Route path="/login" component={Login} />
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </Router>
  )
}

export default App
