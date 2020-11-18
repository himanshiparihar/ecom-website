import React from 'react';
import './index.css';

function myaccount(props) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")); 
  return (
      <React.Fragment>
          <div className="page-page">
            <div className="account-account">
                <div className="account-heading">
                    Account
                </div>
                <div>{currentUser.name}</div>
            </div>
            <div class="sidebar-sidebar">
                <div class="segment-segment">
                    <div class="segment-heading"><a href={`/${currentUser.id}/orders`} class="segment-link">ORDERS</a></div>
                </div>
            </div>
            <div className="page-profile">
                <div className="profile-card">
                <div className="profile-infoLabel">
                    Profile Details
                </div>
                <table className="profile-infoTable">
                    <tbody>
                        <tr>
                            <td>Full Name :</td>
                            <td>{currentUser.name}</td>
                        </tr>
                        <tr>
                            <td>Phoneno. :</td>
                            <td>{currentUser.phoneno}</td>
                        </tr><tr>
                            <td>Address :</td>
                            <td>{currentUser.address}</td>
                        </tr><tr>
                            <td>City :</td>
                            <td>{currentUser.city}</td>
                        </tr><tr>
                            <td>State :</td>
                            <td>{currentUser.state}</td>
                        </tr><tr>
                            <td>Zipcode :</td>
                            <td>{currentUser.zipcode}</td>
                        </tr><tr>
                            <td>Email :</td>
                            <td>{currentUser.email}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="profile-editButton">Edit</div>
                </div>
            </div>
          </div>
      </React.Fragment>
  );
}

export default myaccount;
