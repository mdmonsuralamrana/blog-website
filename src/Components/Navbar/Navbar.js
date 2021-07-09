import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-white" to="/">
                        Daily News
                    </Link>
                    <button
                        className="navbar-toggler bg-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse form-inline my-2 my-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link
                                className="nav-link text-white ms-5 active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                            <li className="nav-item">
                                <Link className="nav-link ms-5 text-white" to="/"> Service </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ms-5 text-white" to="/">News</Link>
                            </li>
                            <Link className="nav-link text-white ms-5" to="/dashboard">
                                Dashboard
                            </Link>
                            <Link className="nav-link text-white ms-5" to="/login">
                                Login
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;