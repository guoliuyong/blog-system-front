`import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DefaultLayout from './Containers'
import Login from './Pages/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App