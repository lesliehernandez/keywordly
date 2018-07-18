import React from 'react'

const Nav = () => (
    <nav className="navbar">
        <a className="navbar-brand" href="/">
            Keywordly
        </a>
        <div className="right-side">
            <a className="nav-login" href="/auth/login">Login</a>
            <a className="nav-signup" href="/auth/signup">Signup</a>
            <a className="nav-logout" href="/auth/logout">Logout</a>
        </div>
    </nav>
)

export default Nav;