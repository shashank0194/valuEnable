import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerfail, registersucces } from '../store/Auth/actions';

function Register() {
    const [formdata, setFormdata] = useState({})
    const { error, MESSAGE } = useSelector(store => store.Register)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata({
            ...formdata,
            [name]: type === "checkbox" ? checked : value,
        })

    };
    // console.log(formdata);
    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3745/signup', {
            ...formdata
        })
            .then(function (response) {
                dispatch(registersucces(response.data.message))
                localStorage.setItem("Token", "valuenable")
                localStorage.setItem("isAuth", true)
                alert("Registration Success")
                history.push("/login")
            }).catch(err => {
                alert("Registration failed, user already exists")
                dispatch(registerfail(err.message))
                setFormdata("")
            })

    };
    // console.log();
    // if (localStorage.getItem("isAuthAdmin")!="true") {
    //     return <Redirect to="/login"></Redirect>
    // }
    return (
        <>
            <div className="container p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "15px" }}>
                <h1 className="pb-3">Register Yourself Here</h1>
                <form >
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1" name="name" onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-12 mb-2">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" onChange={handleChange} />
                    </div>
                    <div className="col-12 mb-2">
                        <label className="form-label">Role</label>
                        <select className="form-select" aria-label="Default select example" name="roles" onChange={handleChange} >
                            <option value="select here"></option>
                            <option value="Admin">Admin</option>
                            <option value="Customer">customer</option>
                            <option value="Moderator">moderator</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary mt-2" onClick={
                        handlesubmit
                    }>Submit</button>
                </form>

            </div>

        </>
    )
}

export default Register