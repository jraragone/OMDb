import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from '../store/action-creators/moviesreducer'
import UserPage from '../components/UserPage'



const mapStateToProps = function (state) {
    return {
        movies: state.movies.list,

    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchMovies: () => dispatch(fetchMovies())
    };
};

class UserContainer extends React.Component {
    componentDidMount() {
        this.props.fetchMovies()
    }


    render() {
        return <UserPage movies={this.props.movies} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);