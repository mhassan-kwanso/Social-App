import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleChange = e => {
    console.log("onChange:", e.target.value, e.target.id);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  validateForm() {
    console.log("Validation:");
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.password === this.state.confirmPassword
    );
  }

  render() {
    return (
      <div className="container">
        <hr />
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>email</ControlLabel>
            <FormControl
              type="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="confirmPassword" bsSize="large">
            <ControlLabel>Confirm Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Re-Enter Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="submit" bsStyle="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
