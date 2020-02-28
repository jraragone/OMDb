import React from 'react'
import { Link } from 'react-router-dom'

export default ({ handleChange, handleSubmit, value, user, handleClick, button }) => {
    const logged = user.username;
    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/movies' className="navbar-brand" href="#">OMDB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link" >Joum</Link>
                    </li>
                    {!logged ?
                        <li className="nav-item">
                            <Link to='/users/register' className="nav-link" >Register</Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to={`user/${user.id}`} className="nav-link" >Hola, {user.username}</Link>
                        </li>

                    }
                    {!logged ?
                        <li className="nav-item">
                            <Link className="nav-link" to='/users/login'>Login</Link>
                        </li>
                        :
                        <li className="nav-item">
                            <button onClick={handleClick} className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                        </li>

                    }

                </ul>
                <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
                    <input value={value} onChange={handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button disabled={!button} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>)
}