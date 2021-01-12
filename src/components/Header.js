import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>ZIP Code Search</h1>
        </header>
    )
}
const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding:'10px'
}