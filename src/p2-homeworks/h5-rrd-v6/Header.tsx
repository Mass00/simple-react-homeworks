import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import st from './Header.module.css'
function Header() {
    return (
        <div className={st.container}>
            <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink to={PATH.PRE_JUNIOR}>PreJunior+</NavLink>
            <NavLink to={PATH.PRE_JUNIOR}>Junior</NavLink>
        </div>
    )
}

export default Header
