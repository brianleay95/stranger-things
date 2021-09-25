import React from 'react'
import {clearCurrentUser} from "../auth"

const Navbar = ({isLoggedIn, setCurrentPage, setIsLoggedIn}) => {
    return (
        <div className="navbar">
            <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage({name: "Posts", properties: null})
            }}> Posts
            </span>
            {isLoggedIn ? <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage({name:"Messages", properties: null})
            }}> Messages
            </span> : null}
            {isLoggedIn ? <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage({name:"Sellings", properties: null})
            }}> Sellings
            </span> : null}
            {isLoggedIn ? <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage({name:"Create Posts", properties: null})
            }}> Create Posts
            </span> : null}
            { isLoggedIn
                ? <span onClick={(event) => {
                    event.preventDefault()
                    setCurrentPage({name:"Logout", properties: null})
                    setIsLoggedIn(false)
                    clearCurrentUser()
                }}> Logout
                </span>
                : <span onClick={(event) => {
                    event.preventDefault()
                    setCurrentPage({name:"Login", properties: null})
                }}> Login/Register
                </span>}
        </div>
    );
};

export default Navbar;