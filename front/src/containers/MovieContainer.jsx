import React from "react";
import { connect } from "react-redux";
import { fetchSingleMovie } from '../store/action-creators/moviesreducer'
import Movie from '../components/Movie'
import userContainer from "./userContainer";



const mapStateToProps = function (state) {
    return {
        movie: state.movies.selectedMovie,
        user: state.userRegister.user
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchSingleMovie: (id) => dispatch(fetchSingleMovie(id))
    };
};

class MovieContainer extends React.Component {
    componentDidMount() {
        this.props.fetchSingleMovie(this.props.match.params.id)
    }

    handleFav() {

    }


    render() {
        console.log(this.props.movies)
        return <Movie user={this.props.user} movie={this.props.movie} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);