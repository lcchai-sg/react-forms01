import React, { Component } from 'react'

export default class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      errUsername: "",
      errPassword: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let valid = true;
    if (this.state.username === "") {
      this.setState({
        errUsername: "username is required",
      });
      valid = false;
    }
    if (this.state.password === "") {
      this.setState({
        errPassword: "password is required",
      })
      valid = false;
    }
    console.log('>>>', this.state);
    if (valid) {
      this.setState({
        username: "",
        password: "",
        errUsername: "",
        errPassword: "",
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errUsername: "",
      errPassword: "",
    })
  }

  render() {
    const { username, password, errUsername, errPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            onChange={this.handleChange}
            name="username"
            id="username"
            type="text"
            className={errUsername === "" ? "form-control" : "form-control is-invalid"}
          />
          <span className="invalid-feedback">{this.state.errUsername}</span>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={this.handleChange}
            name="password"
            id="password"
            type="password"
            className={errPassword === "" ? "form-control" : "form-control is-invalid"}
          />
          <span className="invalid-feedback">{this.state.errPassword}</span>
        </div>

        <button className="btn btn-primary btn-block btn-lg">Login</button>
      </form>
    )
  }
}
