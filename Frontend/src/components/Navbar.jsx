import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("https://hospital-management-system-yb4o.onrender.com/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  return (
    <>
      <nav className="nav">
        <div className="navContainer">
          <div className="logo">
            <img src="/logo.png" alt="logo" className="logo-img" />
          </div>
          <div className={show ? "navLinks showmenu" : "navLinks"}>
            <div className="links">
              <Link to={"/"} onClick={() => setShow(!show)}>
                Home
              </Link>
              <Link to={"/appointment"} onClick={() => setShow(!show)}>
                Appointment
              </Link>
            </div>

            <div>
              {isAuthenticated ? (
                <button className="logoutBtn btn" onClick={handleLogout}>
                  LOGOUT
                </button>
              ) : (
                <button className="loginBtn btn" onClick={goToLogin}>
                  LOGIN
                </button>
              )}
            </div>
          </div>
          <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;