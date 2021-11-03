import React from 'react'
import {Link} from 'react-router-dom'
import './centerDiv.css'
const Signup = () => {
    const style={
        backgroundImage:'linear-gradient(45deg,lightgreen,yellowgreen)'
    }
    return (
        <div className="centerdiv" style={style}>
        <h1>SignUp to use the app</h1>
       <form className="userForm">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="confirmpwd" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-outline-primary">SignUp</button>
            <h3 className='my-2'>OR</h3>
            <Link className="nav-link my-2" aria-current="page" to="/signin">Already have an account</Link>

        </form>
    </div>
    )
}

export default Signup
