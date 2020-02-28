import React from 'react'
import { Link } from 'react-router-dom'

export default ({ movies, user }) => {
    return (
        <div>
            <h1>Movies</h1>
            <div className="row">
                {movies ? movies.map(movie => {
                    return (<div key={movie.imdbID} className="col-4">
                        <img src={movie.Poster === 'N/A' ? 'https://image.shutterstock.com/z/stock-photo-popcorn-in-striped-bucket-isolated-on-white-background-175375529.jpg' : movie.Poster} className="card-img-top" alt="..." />
                        <Link to={`/movies/${movie.imdbID}`}> <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text">{movie.Plot}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </Link>
                        {user.username ? <button type="submit" className="btn btn-primary">Add +</button> : null}
                    </div>)
                })
                    : <p>  Pelicula no encontrada  </p>}
            </div>
        </div>)

}