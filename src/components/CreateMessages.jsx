import React, { useState, useEffect } from "react";
import { addMessages, addPosts } from "../api";
import { getToken } from "../auth";

const CreateMessages = ({ isLoggedIn, setIsLoading}) => {
     if(!isLoggedIn) 
        return (<div className="sellings-main-container">You're not logged in!  Please log in to message about this post.</div>)


    const [ content, setContent ] = useState("");
    const [ sent, setSent ] = useState(false)
    const pageLocation = useLocation()
    const { post } = pageLocation.state
    
    return sent ? <div>Message Sent!</div> :
        <div className="">
            <form 
                id="createMessages"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    setIsLoading(true);
                    try {
                        const results = await addMessages(content, post._id)
                        setContent("")
                        setSent(true)
                    }catch (err) {
                        console.log(err);
                    } finally {
                        setIsLoading(false);
                    }
                }}
                >
                <fieldset className="">
                    <label htmlFor="Title">Message</label>
                    <input type="text"
                            id="Content"
                            placeholder="Message"
                            value={content} 
                            onChange={(event) => {
                                setContent(event.target.value);
                            }}/>
                </fieldset>
                <input type="submit" value="Submit" />
            </form>
        </div>
};

export default CreateMessages;
