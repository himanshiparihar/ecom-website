import React from 'react';
import {withRouter} from 'react-router';

const Header = ({history})=>{
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const logOut = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("persist:root");
    history.push('/');
  }
    return(
      <nav className="navbar sticky-top navbar-expand-lg navbar-bg-primary" style={{padding: 0 }} > 
        <div className="shadow p-3 bg-white rounded" style={{"width":"100%","height":"auto"}}>
          <a className="navbar-brand nav-link" href="/">LOCALS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {currentUser
                ? 
                  <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href=" " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Menu
                    </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href={`/${currentUser.id}/account`}>My Account</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href={`/${currentUser.id}/orders`}>My orders</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href={`/${currentUser.id}/customerservice`}>Customer Service</a>
                      </div>
                  </li>
                : null
              }
              {currentUser
              ? 
                <li className="nav-item active">
                  <a href=" " className="nav-link" onClick={logOut}>Logout <span className="sr-only">(current)</span></a>
                </li>
              :
                <li className="nav-item active">
                  <a className="nav-link" href="/login">Login/Signup <span className="sr-only">(current)</span></a>
                </li>
              }
              {
                currentUser ?
                <li className="nav-item active">
                  <a className="nav-link" href={`/${currentUser.id}/cart`}>Cart</a>
                </li>
                :null
              }
            </ul>
          </div>
        </div>
      </nav>

    )
}


export default withRouter(Header);