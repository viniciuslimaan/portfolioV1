import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import api from '../services/api'

import Home from '../views/Home'
import Admin from '../views/Admin'
import Login from '../views/Login'
import AdminEdit from '../views/AdminEdit'
import AdminCreate from '../views/AdminCreate'
import NotFound from '../views/NotFound'

function CustomRoute({ isPrivate, pageLogin, ...rest }) {
    const token = JSON.parse(localStorage.getItem('token'))

    if (isPrivate && !token) {
        return <Redirect to="/admin/login" />
    } else if (pageLogin && token) {
        return <Redirect to="/admin" />
    } else if (isPrivate && token) {        
        jwt.verify(token, `${process.env.REACT_APP_SECRET_TOKEN}`, function(err, data) {
            if (err) {
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                api.defaults.headers.Authorization = undefined
                return <Redirect to="/admin/login" />
            }
            api.defaults.headers.Authorization = `Bearer ${token}`
            const id = data.idAdmin
            localStorage.setItem('id', id)
        })
    }

    return <Route {... rest} />
}

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <CustomRoute path="/" exact component={Home} />
                <CustomRoute pageLogin path="/admin/login" exact component={Login} />
                <CustomRoute isPrivate path="/admin" exact component={Admin} />
                <CustomRoute isPrivate path="/admin/edit-:edit/:id" exact component={AdminEdit} />
                <CustomRoute isPrivate path="/admin/add-:create" exact component={AdminCreate} />
                <CustomRoute path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}