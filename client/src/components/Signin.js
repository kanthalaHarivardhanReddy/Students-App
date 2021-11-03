import React from 'react'
import {Link} from 'react-router-dom'
import './centerDiv.css'
const Signin = () => {
    const style={
        backgroundImage:'linear-gradient(45deg,pink,skyblue)'
    }
    return (
        <div className="centerdiv" style={style}>
            <h1>SignIn to use the app</h1>
           <form className="userForm">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
                    <input type="email" className="form-control rounded" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label ">Password</label>
                    <input type="password" className="form-control rounded" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-outline-primary">SignIn</button>
                <h3 className='my-2'>OR</h3>
                <Link className="nav-link my-2" aria-current="page" to="/signup">Create an account here</Link>
            </form>
        </div>
    )
}

export default Signin