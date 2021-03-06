import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginfail, loginsucces } from '../store/Auth/actions';
import { useDispatch } from 'react-redux';
function Login() {
    // state for form
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch()
    const history = useHistory()

    // handler function for input change in form
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })
    };

    // handler function to submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3745/signin', {
            email: formdata.email,
            password: formdata.password
        })
            .then(function (response) {
                dispatch(loginsucces(response.data.token))
                localStorage.setItem("Token", response.data.token)
                localStorage.setItem("name", response.data.user.name)
                localStorage.setItem("roles", response.data.user.roles)
                alert(`Welcome ${response.data.user.name},You have successfully logged in`)
                history.push("/")

            }).catch((err) => {
                dispatch(loginfail(err.message))
                alert("Invalid Credential")
                setFormdata({
                        email: "",
                        password: ""
                    })
            })
    }
    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "20px" }}>
            <h1 className="text-center pb-4">Login Here</h1>
            <form >
                <div className="mb-3">
                    <input type="email"
                        className="form-control"
                        placeholder="email"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange} /><br />
                    <input type="password"
                        className="form-control"
                        placeholder="password"
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        name="password"
                        value={formdata.password}
                        onChange={handleChange} /><br />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={
                        handleSubmit
                    }>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login