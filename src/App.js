import './App.css'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Router } from "react-router";
import { createBrowserHistory } from 'history';
import DefaultLayout from './Containers'
import View500 from './Pages/500Page';
import Login from './Pages/Login'
const history = createBrowserHistory();
window.reactRouter = history;

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/index" />} />
        <Route path="/login" component={Login} />
        <Route path="/500" component={View500} />
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </Router>
  )
}

export default App
