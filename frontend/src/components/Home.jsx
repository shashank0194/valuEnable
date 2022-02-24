import React from 'react'

export const Home = () => {
    return (
        <>
            <h1>Welcome {localStorage.getItem("name")}</h1>
            <h4>on {localStorage.getItem("roles")} page</h4>
        </>
    )
}
