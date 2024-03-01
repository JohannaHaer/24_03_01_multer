import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/newpost'>New Post</NavLink>
        </nav>
    )
}

export default Nav