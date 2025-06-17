import React from "react";
import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {

  return (
    <>
      <footer className={"container"}>
        <div className="content">
          <h3 style={ {color: "#002d62"}} >Contact Us</h3>
          <div className="contactDiv">
            <div>
              <FaPhone />
              <span>999-999-9999</span>
            </div>
            <div>
              <MdEmail />
              <span>helpdesk@axonhospital.com</span>
            </div>
            <div>
              <FaLocationArrow />
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© Copyright 2025. Axon Hospital. All Rights Reserved.</p>
        </div>
      </footer>

    </>
  );
};

export default Footer;