import React from 'react';
import Container from '@material-ui/core/Container';

const Account = () => {
  return (
    <Container>
      <div className="account-page">
        <h1>Account</h1>
        <div className="account-details">
          <h3>Account Details</h3>
          <div className="account-details-content">
            <p>Email: email@email.co.uk</p>
            <a className="lg-view" href="#">
              Change Email
            </a>
            <a className="sm-view" href="#">
              Change
            </a>
          </div>
          <div className="account-details-content">
            <p>Password: ********</p>
            <a className="lg-view" href="#">
              Change Password
            </a>
            <a className="sm-view" href="#">
              Change
            </a>
          </div>
          <div className="account-details-content">
            <p></p>
            <a href="#">Add Phone Number</a>
          </div>
        </div>
        <div className="account-details">
          <div className="account-details-content">
            <p>Next Billing Date: 18 June 2020</p>
            <a className="lg-view" href="#">
              Update Payment Info
            </a>
            <a className="sm-view" href="#">
              Update
            </a>
          </div>
          <div className="account-details-content">
            <p>Card Number: **** **** **** 2754</p>
            <a className="lg-view" href="#">
              Billing Details
            </a>
            <a className="sm-view" href="#">
              Details
            </a>
          </div>
          <div className="account-details-content">
            <p></p>
            <a href="#">Redeem Gift Card</a>
          </div>
        </div>
        <div className="account-details">
          <h3>Plan Details</h3>
          <div className="account-details-content">
            <p>Plan: Standard (1 Book Token) </p>
            <a className="lg-view" href="#">
              Change Plan
            </a>
            <a className="sm-view" href="#">
              Change
            </a>
          </div>
        </div>
        <div className="account-details">
          <h3>Settings</h3>
          <div className="account-details-content">
            <a href="#">Purchase History</a>
          </div>
          <div className="account-details-content">
            <a href="#">Email Preferences</a>
          </div>
          <div className="account-details-content">
            <a href="#">Sign Out of All Devices</a>
          </div>
          <div className="account-details-content">
            <a href="#">Delete Account</a>
          </div>
          <div className="account-details-content">
            <button>Cancel Membership</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Account;
