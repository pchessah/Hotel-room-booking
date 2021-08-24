import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
    return (
        <>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about-us">
                    <li>About</li>
                </Link>


            </ul>
        </>

    )
}

export default NavigationBar
