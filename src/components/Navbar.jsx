import React from 'react'

const Navbar = ({setLoginCred}) => {
    return (
        <div>
            <span onClick={(event) => {
                event.preventDefault()
            }}> Post
            </span>
            <span onClick={(event) => {
                event.preventDefault()
                set
            }}> Messages
            </span>
            <span onClick={(event) => {
                event.preventDefault()

            }}> Selling
            </span>
            { loginCred === null
                ? <span onClick={(event) => {
                    event.preventDefault()
                    
                }}> Login/Register
                </span>
                : <span onClick={(event) => {
                    event.preventDefault()
                    setLoginCred(null)
                }}> Logout
                </span>}
        </div>
    );
};

export default Navbar;