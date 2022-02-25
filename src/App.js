import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DefaultLayout from './Containers'
import Login from './Pages/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/index" />} />
        <Route path="/login" component={Login} />
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </Router>
  )
}

export default App
