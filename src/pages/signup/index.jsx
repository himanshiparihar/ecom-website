import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {customerSignUpStart} from '../../redux/auth/actions';
import {selectError, selectLoading} from '../../redux/auth/selector';

import Loader from '../../components/loader';
import "./index.css";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      Phoneno: null,
      Address: null,
      City:null,
      State:null,
      Zipcode:null,
      email: null,
      password: null,
      formErrors: {
        Name: "",
        Phoneno: "",
        Address: "",
        City:"",
        State:"",
        Zipcode:"",
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.props.signUpStart({Name: this.state.Name,Phoneno: this.state.Phoneno,Address: this.state.Address,City: this.state.City,State: this.state.State,Zipcode: this.state.Zipcode,email: this.state.email,password: this.state.password,})
    } else {
      console.log(this.state);
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "Name":
        formErrors.Name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "Phoneno":
        formErrors.Phoneno =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      case "Zipcode":
        formErrors.Zipcode =
          value.length < 3 ? "Zipcode cant be empty" : "";
        break;
      case "City":
        formErrors.City =
          value.length < 0 ? "City cant be empty" : "";
        break;
      case "State":
          formErrors.State =
            value.length < 0 ? "State cant be empty" : "";
          break;
      case "Address":
        formErrors.Address =
          value.length < 5 ? "Enter full address" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper1">
        <Loader isLoading={this.props.loading}/>
        <div className="form-wrapper1">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Name1">
              <label htmlFor="Name"> Name </label>
              <input
                className={formErrors.Name.length > 0 ? "error1" : null}
                placeholder="Name"
                type="text"
                name="Name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Name.length > 0 && (
                <span className="errorMessage1">{formErrors.Name}</span>
              )}
            </div>


            <div className="Phoneno1">
              <label htmlFor="Phoneno">Phoneno</label>
              <input
                className={formErrors.Phoneno.length > 0 ? "error1" : null}
                placeholder="Phoneno"
                type="int"
                name="Phoneno"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Phoneno.length > 0 && (
                <span className="errorMessage1">{formErrors.Phoneno}</span>
              )}
            </div>


            <div className="Address1">
              <label htmlFor="Address">Address</label>
              <input
                className={formErrors.Address.length > 0 ? "error1" : null}
                placeholder="housno , street"
                type="text"
                name="Address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Address.length > 0 && (
                <span className="errorMessage1">{formErrors.Address}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="City1">
              <label htmlFor="City">City</label>
              <input
                className={formErrors.City.length > 0 ? "error1" : null}
                placeholder="City"
                type="text"
                name="City"
                noValidate
                onChange={this.handleChange}
              /> 
              {formErrors.City.length > 0 && (
                <span className="errorMessage1">{formErrors.City}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="State1">
              <label htmlFor="State">State</label>
              <input
                className={formErrors.State.length > 0 ? "error1" : null}
                placeholder="State"
                type="text"
                name="State"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.State.length > 0 && (
                <span className="errorMessage1">{formErrors.State}</span>
              )}
            </div>
            <br></br><br></br><br></br>
            
            <div className="Zipcode1">
              <label htmlFor="Zipcode">Zipcode</label>
              <input
                className={formErrors.Zipcode.length > 0 ? "error1" : null}
                placeholder="Zipcode"
                type="int"
                name="Zipcode"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Zipcode.length > 0 && (
                <span className="errorMessage1">{formErrors.Zipcode}</span>
              )}
            </div>
            <br></br><br></br><br></br><br></br>

            <div className="email1">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error1" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage1">{formErrors.email}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="password1">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error1" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage1">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount1">
              <button type="submit">Create Account</button>
              <small><a href="/login">Login </a>if you already Have an Account?</small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  error: selectError,
  loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
  signUpStart: (details) => dispatch(customerSignUpStart(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);