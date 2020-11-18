import React, { Component } from "react";
import "./signup.css";

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
      DOB: null,
      
      Gender:null,
      Address: null,
      City:null,
      State:null,
      zipcode:null,
      email: null,
      password: null,
      formErrors: {
        Name: "",
        Phoneno: "",
        DOB:"",
        Gender:"",
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
      console.log(`
        --SUBMITTING--
        Name: ${this.state.Name}
        Phoneno: ${this.state.Phoneno}
        DOB: ${this.state.DOB}
        Gender: ${this.state.Gender}
        Address: ${this.state.Address}
        City: ${this.state.City}
        State: ${this.state.State}
        Zipcode: ${this.state.Zipcode}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
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

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper1">
        <div className="form-wrapper">
          <h1>Create Account</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="Name">
              <label htmlFor="Name"> Name </label>
              <input
                className={formErrors.Name.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="Name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Name.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
            </div>


            <div className="Phoneno">
              <label htmlFor="Phoneno">Phoneno</label>
              <input
                className={formErrors.Phoneno.length > 0 ? "error" : null}
                placeholder="Phoneno"
                type="int"
                name="Phoneno"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Phoneno.length > 0 && (
                <span className="errorMessage">{formErrors.Phoneno}</span>
              )}
            </div>


            <div className="Address">
              <label htmlFor="Address">Address</label>
              <input
                className={formErrors.Address.length > 0 ? "error" : null}
                placeholder="housno , street"
                type="text"
                name="Address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Address.length > 0 && (
                <span className="errorMessage">{formErrors.Address}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="City">
              <label htmlFor="City">City</label>
              <input
                className={formErrors.City.length > 0 ? "error" : null}
                placeholder="City"
                type="text"
                name="City"
                noValidate
                onChange={this.handleChange}
              /> 
              {formErrors.City.length > 0 && (
                <span className="errorMessage">{formErrors.City}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="State">
              <label htmlFor="State">State</label>
              <input
                className={formErrors.State.length > 0 ? "error" : null}
                placeholder="State"
                type="text"
                name="State"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.State.length > 0 && (
                <span className="errorMessage">{formErrors.State}</span>
              )}
            </div>
            <br></br><br></br><br></br>
            
            <div className="Zipcode">
              <label htmlFor="Zipcode">Zipcode</label>
              <input
                className={formErrors.Zipcode.length > 0 ? "error" : null}
                placeholder="Zipcode"
                type="int"
                name="Zipcode"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Zipcode.length > 0 && (
                <span className="errorMessage">{formErrors.Zipcode}</span>
              )}
            </div>
            <br></br><br></br><br></br><br></br>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">Create Account</button>
              <a href="/login"><small>Already Have an Account?</small></a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
