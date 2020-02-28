import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from '../store/action-creators/moviesreducer'
import { logOut } from '../store/action-creators/registerReducer'
import Navbar from '../components/Navbar'

const mapStateToProps = function (state) {
    return {
        user: state.userRegister.user
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchMovies: (name) => dispatch(fetchMovies(name)),
        logOut: () => dispatch(logOut())

    };
};
class NavbarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            button: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {

    }
    handleChange(evt) {
        let value = evt.target.value;
        this.setState({
            inputValue: value,
            button: value.length ? true : false
        })

    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchMovies(this.state.inputValue.replace(/\s+/g, "_"))
            .catch(() => { this.setState({ error: true }) })
    }

    handleClick() {
        this.props.logOut()
    }

    render() {
        return <Navbar button={this.state.button} handleClick={this.handleClick} user={this.props.user} input={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);