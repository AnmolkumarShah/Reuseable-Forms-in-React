import React, { Component } from "react";
import Joi from "joi-browser";
import InputField from "./inputField";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      errors: {},
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }
  validate() {
    const error = {};
    const options = {
      abortEarly: false,
    };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (result.error) {
      for (let item of result.error.details) {
        error[item.path] = item.message;
      }
    }
    if (Object.keys(error).length === 0) return {};
    return error;
  }
  handelChange(e) {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data: data });
  }
  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) return;
    this.doSubmit();
  }
  submitButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }
  doSubmit() {
    console.log("Submitted");
  }
  renderInput(name, label, value, errors) {
    return (
      <InputField
        name={name}
        label={label}
        value={value}
        onChange={this.handelChange}
        errors={errors}
      />
    );
  }
}

export default Form;
