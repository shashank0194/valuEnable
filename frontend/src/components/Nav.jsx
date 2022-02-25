import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginfail } from '../store/Auth/actions'

export const Nav = () => {
    // extracting token from store
    const { Token } = useSelector(store => store)

    const dispatch = useDispatch()
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand" >ValuEnable</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" className="nav-item" style={{textDecoration:"none"}}>
                                <div className="nav-link">Dashboard</div>
                            </Link>
                            <li className="navdivitem">
                                <div className="nav-link">About Us</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link">Global</div>
                            </li>
                        </ul>
                        {
                            Token ? <button className="btn btn-outline-success me-4" type="button" disabled>Register</button>
                            :
                            <Link to="/register"><button className="btn btn-outline-success me-4" type="button" >Register</button></Link>

                        }
                        {/* logic for, if the user logged in the it will show the logout button otherwise it will show the User button,
                        if the user is logged in and then user clicks on Logout button then the User will forced to logout the system */}
                        {
                            !Token ?
                                <Link to="/login"><button className="btn btn-outline-success me-4" type="button">User</button></Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-outline-success me-4" type="button"
                                        onClick={() => {
                                            dispatch(loginfail())
                                            localStorage.setItem("Token", "")
                                            localStorage.setItem("roles", "Dashboard")
                                            localStorage.setItem("name", "User")
                                        }}>Logout</button></Link>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
