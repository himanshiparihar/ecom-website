import React, { Component } from "react";
import "./index.css";


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

class customerservice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customerid: null,
      orderid: null,
      productid: null,
      query: null,
      
      formErrors: {
        customerid: "",
        orderid: "",
        productid: "",
        query: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        customerid: ${this.state.customerid}
        orderid: ${this.state.orderid}
        productid: ${this.state.productid}
        query: ${this.state.query}
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
      case "customerid":
        formErrors.customerid =
          value.length < 0 ? "Enter valid id" : "";
        break;
      case "orderid":
        formErrors.orderid =
          value.length < 0 ? "Enter valid id" : "";
        break;
      case "productid":
        formErrors.productid =
          value.length < 0 ? "Enter valid id" : "";
        break;
      case "query":
        formErrors.query =
          value.length < 0 ? "query cant be empty" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Customer service</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="customerid">
              <label htmlFor="customerid"> customerid </label><br></br>
              <input
                className={formErrors.customerid.length > 0 ? "error" : null}
                placeholder="customerid"
                type="int"
                name="customerid"
                noValidate
                onChange={this.handleChange}
              /> 
              {formErrors.customerid.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
            </div>

            <br></br><br></br><br></br>

            <div className="orderid">
              <label htmlFor="orderid">orderid</label><br></br>
              <input
                className={formErrors.orderid.length > 0 ? "error" : null}
                placeholder="orderid"
                type="int"
                name="orderid"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.orderid.length > 0 && (
                <span className="errorMessage">{formErrors.orderid}</span>
              )}
            </div>

            <br></br><br></br><br></br><br></br>

            <div className="productid">
              <label htmlFor="productid">productid</label><br></br>
              <input
                className={formErrors.productid.length > 0 ? "error" : null}
                placeholder="productid"
                type="int"
                name="productid"
                noValidate
                onChange={this.handleChange}
              /> 
              {formErrors.productid.length > 0 && (
                <span className="errorMessage">{formErrors.productid}</span>
              )}
            </div>
            <br></br><br></br><br></br>

            <div className="query">
              <label htmlFor="query">query</label> <br />
              {/* <input
                className={formErrors.query.length > 0 ? "error" : null}
                placeholder="query"
                type="query"
                name="query"
                noValidate
                onChange={this.handleChange}
              /> */}
              <textarea rows = "5" cols = "50" name = "description" style={{"padding": "3" ,"border":"1px solid #cfcfcf" , "color":"grey"}}>
	            	Enter description here...
             	</textarea>
              {formErrors.query.length > 0 && (
                <span className="errorMessage">{formErrors.query}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default customerservice;
