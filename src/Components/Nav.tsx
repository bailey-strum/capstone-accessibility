import { Component } from "react";


class Nav extends Component {
    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">POUR</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link px-3" href="/pour">Sign out</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Nav