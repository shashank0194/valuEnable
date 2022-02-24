import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginfail } from '../store/Auth/actions'

export const Nav = () => {
    const { Token } = useSelector(store => store.Auth)
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >ValuEnable</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/" className="nav-item">
                                <a className="nav-link">Dashboard</a>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Global</a>
                            </li>
                        </ul>
                        <Link to="/register"><button className="btn btn-outline-success me-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</button></Link>
                        {
                            !Token ?
                                <Link to="/login"><button className="btn btn-outline-success me-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">User</button></Link>
                                :
                                <Link to="/login">
                                    <button className="btn btn-outline-success me-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => {
                                            dispatch(loginfail())
                                            localStorage.setItem("Token", "")
                                            localStorage.setItem("isAuth", false)
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
