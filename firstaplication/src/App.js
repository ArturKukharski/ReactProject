import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Users from './components/users'
import Login from './components/login'
import Main from './components/main'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/navbar'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/:userId?" component={Users} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  )
}

export default App
