import React from 'react'

export default function Header() {
    return (
        <div style={headerStyle}>
            <h1 className='heading'>Say hello to ReactJs</h1>
            <p className='paragraf'>you will learn a Frontend framework from scratch, to became an Ninja Developer.</p>
            <button style={headButton}>Awesome!</button>
        </div>
    )
}

//h1
const headerStyle = {
    color : 'white',
}

const headButton = {
    backgroundColor: 'white',
    marginLeft: '60px',
    marginTop: '40px',
    marginBottom: '70px',
    padding: '25px 30px',
    borderRadius: '8px',
    fontSize: '25px'
}

