import React from 'react'

export default ({ movie, user }) => {

    return (<div className="card mb-3">
        <img src={movie.Poster} className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Plot}</p>
            {user.username ? <button type="submit" className="btn btn-primary">Add to favs</button> : null}
        </div>
    </div>
    )
}




