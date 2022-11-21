import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
            <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky pt-3 sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to={'/dashboard'} className="nav-link active" aria-current="page">
                                <span data-feather="home" className="align-text-bottom"></span>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={'/profile'}className="nav-link"> 
                                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                User Profile
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/quiz'}className="nav-link">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            Quiz
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="users" className="align-text-bottom"></span>
                            Catalog
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to={'/stats'}className="nav-link">
                                <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                Statistics
                            </Link>
                        </li>
                    
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                        <span>Saved reports</span>
                        <a className="link-secondary" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle" className="align-text-bottom"></span>
                        </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Saved Quizes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Code Snippets
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            Notes
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

    )
}

export default Menu;