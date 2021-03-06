import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">H Student App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <Link className="nav-link border border-primary active mx-2" aria-current="page" to="/signin">Sign In</Link>
                    <Link className="nav-link border border-primary active mx-2" aria-current="page" to="/signup">Sign Up</Link>
                    
                    {/* <button className="btn btn-outline-primary mx-2" to="/signin" >SignUp</button> */}
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default Navbar
