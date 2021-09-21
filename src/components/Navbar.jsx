import React from 'react'

const Navbar = ({isLoggedIn, setCurrentPage, setIsLoggedIn}) => {
    return (
        <div className="navbar">
            <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Posts")
            }}> Posts
            </span>
            {isLoggedIn ? <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Messages")
            }}> Messages
            </span> : null}
            {isLoggedIn ? <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Sellings")
            }}> Selling
            </span> : null}
            { isLoggedIn
                ? <span onClick={(event) => {
                    event.preventDefault()
                    setCurrentPage("Logout")
                    setIsLoggedIn(false)
                    clearCurrentUser()
                }}> Logout
                </span>
                : <span onClick={(event) => {
                    event.preventDefault()
                    setCurrentPage("Login")
                }}> Login/Register
                </span>}
        </div>
    );
};

export default Navbar;