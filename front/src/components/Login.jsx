import React from 'react'

export default ({ handlePasswordChange, handleUserChange, handleSubmit, error }) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input onChange={handleUserChange} type="email" className="form-control" id="username" name='password' aria-describedby="emailHelp" placeholder="Enter username" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handlePasswordChange} type="password" className="form-control" id="password" name='password' placeholder="Password" />
                </div>
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                {error ? <p>Te equivocaste, mostro</p> : null}
            </form>
        </div>)
}
