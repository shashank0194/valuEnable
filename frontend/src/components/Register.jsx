import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Register() {
    // state for form
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        roles: "",
    })

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
    const handlesubmit = (e) => {
        e.preventDefault();
        let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        if (!formdata.name || !formdata.password || !formdata.roles || !formdata.email) {
            alert("Empty value are not allowed")
        } else if (!re.test(formdata.email)) {
            alert("Invalid Email Pattern")
        } else {
            axios.post('http://localhost:3745/signup', {
                ...formdata
            })
                .then(() => {
                    alert("Registration Success")
                    history.push("/login")
                }).catch(() => {
                    alert("Registration failed, user already exists")
                    setFormdata({
                        name: "",
                        email: "",
                        password: "",
                        roles: "",
                    })
                })
        }

    };

    return (
        <>
            <div className="container p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "15px" }}>
                <h1 className="pb-3">Register Yourself Here</h1>
                <form >
                    <div className="input-group mb-3">
                        <input type="text"
                            className="form-control"
                            placeholder="Enter Name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name="name"
                            value={formdata.name}
                            onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                            value={formdata.email}
                            onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-12 mb-2">
                        <label>Password</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            value={formdata.password}
                            onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label">Role</label>
                        <select className="form-select" 
                        aria-label="Default select example" 
                        name="roles" 
                        value={formdata.roles}
                        onChange={handleChange} >
                            <option value="select here"></option>
                            <option value="Admin">Admin</option>
                            <option value="Customer">customer</option>
                            <option value="Moderator">moderator</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-outline-secondary mt-2" onClick={
                        handlesubmit
                    }>Submit</button>
                </form>

            </div>

        </>
    )
}

export default Register