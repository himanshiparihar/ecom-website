import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {customerSignInStart} from '../../redux/auth/actions';
import {selectError, selectLoading} from '../../redux/auth/selector';

import Toast from '../../components/toast';
import Errors from '../../error';
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

const Login = ({error, loading, signInStart}) =>  {
  let [formInputs, setFormInputs] = useState({
    email: null,
    password: null,
    formErrors: {
      email: "",
      password: ""
    }
  });
  const [list, setList] = useState([])

  useEffect(() => {
    setList([Errors[401]])
  }, [error]);
  const handleSubmit = e => {
    e.preventDefault();

    if (formValid(formInputs)) {
      signInStart({email: formInputs.email, password: formInputs.password});
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = formInputs.formErrors;

    switch (name) {
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

    setFormInputs({ ...formInputs,formErrors, [name]: value });
  };
  const { formErrors } = formInputs;

  return (
    <div className="wrapper">
      <Loader isLoading={loading}/>
      {error? <Toast toastList={list}/> : null}
      <div className="form-wrapper">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={handleChange}
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
              onChange={handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="createAccount">
            <button type="submit">Login</button>
            <small><a href="../signup">Signup</a> if you are a new user</small>
            {/* <small><a href="../supplier">supplier account</a> if you are a supplier</small> */}

          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  error: selectError,
  loading: selectLoading,
});

const mapDispatchToProps = dispatch => ({
  signInStart: (details) => dispatch(customerSignInStart(details)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
