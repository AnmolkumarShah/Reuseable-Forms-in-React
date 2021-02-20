import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      data: { username: "", password: "" },
      errors: {},
    };
    this.schema = {
      username: Joi.string().required().label("Username"),
      password: Joi.string().required().label("Password"),
    };
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", data.username, errors)}
          {this.renderInput("password", "Password", data.password, errors)}
          {this.submitButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
