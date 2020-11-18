import React from 'react';
import "./index.css"

const Footer = ()=>{
    return(
      <footer className="page-footer font-small-bg-primary">
        <div className="shadow-lg p-3 bg-white rounded" style={{"width":"100%","height":"400px" ,"marginBottom":"1px","backgroundColor":"beige"}}>
          <div className="container text-center text-md-left">
            <div className="row text-center text-md-left mt-3 pb-3">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                <p>LOCALS</p>
              </div>
              <hr className="w-100 clearfix d-md-none"/>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a href="#!">Furniture</a></p>
                <p><a href="#!">Decor</a></p>
                <p><a href="#!">Electronic</a></p>
                <p><a href="#!">Cosmetics</a></p>
              </div>
              <hr className="w-100 clearfix d-md-none"/>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p><a href="#!">Your Account</a></p>
                <p><a href="#!">Become an Affiliate</a></p>
                <p><a href="#!">Shipping Rates</a></p>
                <p><a href="#!">Help</a></p>
              </div>
              <hr className="w-100 clearfix d-md-none"/>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
            <hr/>
            <div className="row d-flex align-items-center" style={{"width":"100%","height":"4px"}}>
              <div className="col-md-7 col-lg-8">
                <p className="text-center text-md-left">© 2020 Copyright:
                  <a href="https://mdbootstrap.com/">
                    <strong> MDBootstrap.com</strong>
                  </a>
                </p>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0" style={{"width":"100%","height":"4px","margin":"1px"}}>
                {/* <div className="text-center text-md-right"> */}
                  {/* <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <span className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-twitter"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-google-plus-g"></i>
                      </span>
                    </li>
                    <li className="list-inline-item">
                      <span className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-linkedin-in"></i>
                      </span>
                    </li>
                  </ul> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>  
      </footer>
    )
}

export default Footer;


// style={{"background" : "black"}}