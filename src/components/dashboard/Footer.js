import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col">
            <h4>PawPet</h4>
            <ui className="list-unstyled">
              <li>Career</li>
              <li>Blog</li>
              <li>About Us</li>
              <li>About Us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ui>
          </div>

          <div className="col">
            <h4>OUR SERVICES</h4>
            <ui className="list-unstyled">
              <li>Pet Sitting</li>
              <li>Pet Adoption</li>
              <li>Pet Essentials</li>
              <li>Veterinary</li>
            </ui>
          </div>

          <div className="col">
            <h4>GET HELP</h4>
            <ui className="list-unstyled">
              <li>FAQ</li>
              <li>Payment Options</li>

            </ui>
          </div>

          <div className="col">
            <h4>CONTACT US</h4>
            <ui className="list-unstyled">
              <li>1800-263-564</li>
              <li>pawpetservice@gmail.com</li>
            </ui>
            {/* <br /> */}
            <div className="col">
              <h4>FOLLOW US</h4>
            </div>
           
          </div>
          
        </div>
        {/* <br /> */}
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PawPet | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
      <div className="ion">
        <a href="#" class="fa fa-facebook "></a>
        <a href="#" class="fa fa-twitter "></a>
        <a href="#" class="fa fa-google "></a>
        <a href="#" class="fa fa-instagram "></a>
        <a href="#" class="fa fa-youtube "></a>

      </div>
    </div>
  );
}

export default Footer;