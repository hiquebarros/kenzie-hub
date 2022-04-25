import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

const Routes = ({openModal}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@KenzieHub:token"))

        if(token){
            return setIsAuthenticated(true)
        }
    }, [isAuthenticated])

    return ( 
        <Switch>
            <Route exact path='/'>
                <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
            </Route>
            <Route path='/signup'>
                <Signup isAuthenticated={isAuthenticated}/>
            </Route>
            <Route path='/dashboard'>
                <Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} openModal={openModal}/>
            </Route>
        </Switch>
     );
}
 
export default Routes;