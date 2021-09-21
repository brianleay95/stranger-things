
const Logout = (isLoggedIn) => {
    return (
        <div className="logout-confirmation">
            { isLoggedIn
                ? <h1>Logout failed, try again</h1> : <h1>You've logged out!</h1>}
        </div>
  );
};

export default Logout;