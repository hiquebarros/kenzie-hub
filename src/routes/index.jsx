import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Routes = () => {
    return ( 
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route path='/signup'>
                <Signup />
            </Route>
            <Route path='/home'>
                <Dashboard />
            </Route>
        </Switch>
     );
}
 
export default Routes;