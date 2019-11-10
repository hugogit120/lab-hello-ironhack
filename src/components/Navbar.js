import React from 'react'

export default function Navbar() {
    return (
        <div style={navStyle}>
            <img src="./images/ironhack-logo.svg" alt=""/>
            <img src="./images/menu-top.svg" alt=""/>
        </div>
    )
}

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 20px 10px 66px'
}
