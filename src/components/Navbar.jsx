import React from 'react'

const Navbar = ({loginCred, setCurrentPage}) => {
    return (
        <div>
            <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Posts")
            }}> Post
            </span>
            <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Messages")
            }}> Messages
            </span>
            <span onClick={(event) => {
                event.preventDefault()
                setCurrentPage("Sellings")
            }}> Selling
            </span>
            { loginCred === null
                ? <span onClick={(event) => {
                    event.preventDefault()
                    setCurrentPage("Login")
                }}> Login/Register
                </span>
                : <span onClick={(event) => {
                    event.preventDefault()
                    setCurrentPage("Logout")
                }}> Logout
                </span>}
        </div>
    );
};

export default Navbar;