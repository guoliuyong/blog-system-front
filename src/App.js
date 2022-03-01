import './App.css'
import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import DefaultLayout from './Containers'
import View500 from './Pages/500Page'
import store from './Store'
import Login from './Pages/Login'
import { sessionTabs } from './util/menTab'
const history = createBrowserHistory()
window.reactRouter = history

class App extends Component {
  componentDidMount(){
    history.listen(()=>{
      console.log(11223344);
    })
  }
  render() {
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
}
// function App(props) {
//   useEffect(() => {
//     store.subscribe(() => {
//       console.log(store.getState())
//       const arr = store.getState()
//       const { action } = history
//       if (action !== 'PUSH') {
//         // 非路由跳转方式
//         console.log(arr)
//         sessionTabs()
//       }
//     })
//     return () => {
//       console.log('组件要死了')
//     }
//   })
 
// }

export default App
