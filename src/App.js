import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
