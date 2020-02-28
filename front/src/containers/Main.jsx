import React from 'react'
import { Switch, Route, Link, BrowserRouter, Redirect } from 'react-router-dom'
import MovieContainer from './MovieContainer';
import MoviesContainer from './MoviesContainer'
import NavbarContainer from './NavbarContainer'
import RegisterContainer from './RegisterContainer';
import LoginContainer from './LoginContainer'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (<div>
            <NavbarContainer />
            <div>
                <Switch>
                    <Route exact path='/movies' component={MoviesContainer} />
                    <Route path='/movies/:id' component={MovieContainer} />
                    <Route path='/users/register' component={RegisterContainer} />
                    <Route path='/users/login' component={LoginContainer} />
                    <Redirect from='/' to='/movies' />
                </Switch>

            </div>
        </div >
        )

    }
}