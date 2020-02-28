import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from '../store/action-creators/moviesreducer'
import Movies from '../components/Movies'



const mapStateToProps = function (state) {
    return {
        movies: state.movies.list,
        user: state.userRegister.user

    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    };
};

class MoviesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchMovies()
    }


    render() {
        return <Movies user={this.props.user} movies={this.props.movies} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
