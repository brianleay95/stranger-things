import {storeToken, getToken} from "../auth"


const Logout = (isLoggedIn) => {
    console.log('logged in: ', isLoggedIn)
    console.log('token: ', getToken())
    return (
        <div className="logout-confirmation">
            { isLoggedIn
                ? <h1>You've logged out!</h1> 
                : <h1>Logout failed, try again</h1>}
        </div>
  );
};

export default Logout;