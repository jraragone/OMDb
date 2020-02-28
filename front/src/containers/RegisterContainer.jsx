import React from "react";
import { connect } from "react-redux";
import Register from '../components/Register'
import { addUser } from '../store/action-creators/registerReducer'
import { withRouter } from 'react-router-dom'

const mapStateToProps = function (state) {
    return {
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        addUser: (user, password) => dispatch(addUser(user, password))
    };
};

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''

        }
        this.handleUserChange = this.handleUserChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    componentDidMount() {

    }
    handleUserChange(evt) {
        console.log(this.state.username)
        this.setState({
            username: evt.target.value
        })
    }

    handlePasswordChange(evt) {

        this.setState({
            password: evt.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addUser(this.state.username, this.state.password)
            .then(() => this.props.history.push('/users/login'))
    }

    render() {
        return <Register input={this.state.inputValue} handleSubmit={this.handleSubmit} handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} />;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RegisterContainer));
