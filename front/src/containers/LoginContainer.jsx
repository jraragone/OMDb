import React from "react";
import { connect } from "react-redux";
import Login from '../components/Login'
import { logIn } from '../store/action-creators/registerReducer'
import { withRouter } from 'react-router-dom'

const mapStateToProps = function (state) {
    return {
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        logIn: (user, password) => dispatch(logIn(user, password))
    };
};

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: false

        }
        this.handleUserChange = this.handleUserChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    componentDidMount() {

    }
    handleUserChange(evt) {
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
        this.props.logIn(this.state.username, this.state.password)
            .then(() => this.props.history.push('/movies'))
            .catch(() => { this.setState({ error: true }), console.log('TE EQUIVOCASTE, MOSTRO') })
    }

    render() {
        return <Login error={this.state.error} handleSubmit={this.handleSubmit} handleUserChange={this.handleUserChange} handlePasswordChange={this.handlePasswordChange} />;
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));