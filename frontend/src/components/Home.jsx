import React from 'react'

export const Home = () => {
    return (
        <>
            <h1 className='mt-5'>Welcome {localStorage.getItem("name")}</h1>
            <h4 className='mt-5'>on {localStorage.getItem("roles")} page</h4>
            <div className='mt-5'>
            <img src="http://1.bp.blogspot.com/-jiOj3SwwNA4/VaZnaPuCq7I/AAAAAAAABN0/i9TIWKCv1Ig/s1600/hand-clip-art-praying-hands-clipart-8.png" alt="" />
            </div>
        </>
    )
}
