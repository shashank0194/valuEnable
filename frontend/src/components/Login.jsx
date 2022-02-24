import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { loginfail, loginsucces } from '../store/Auth/actions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Login() {
    const [formdata, setFormdata] = useState({})
    const { Token } = useSelector(store => store.Auth)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3745/signin', {
            email: formdata.email,
            password: formdata.password
        })
            .then(function (response) {
                console.log(response.data);
                dispatch(loginsucces(response.data.token))
                localStorage.setItem("Token", response.data.token)
                localStorage.setItem("isAuth", true)
                localStorage.setItem("name", response.data.user.name)
                localStorage.setItem("roles", response.data.user.roles)
                // console.log(response.data.user.name);
                alert(`Welcome ${response.data.user.name},You have successfully logged in`)
                history.push("/")

            }).catch((err) => {
                dispatch(loginfail(err.message))
                alert("Registration failed, user already exists")
                history.replace("/register")
                setFormdata("")
            })
    }
    return (
        <div className="p-5 border border-dark m-5 mx-auto bg-white" style={{ maxWidth: "500px", margin: "auto", borderRadius: "20px" }}>
            <h1 className="text-center pb-4">Login Here</h1>
            <form >
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1" name="email" onChange={handleChange} /><br />
                    <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" name="password" onChange={handleChange} /><br />
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={
                        handleSubmit
                    }>Login</button>
                </div>
            </form>
        </div>
    )
}
export default Login