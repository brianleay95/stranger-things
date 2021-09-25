import React, { useState, useEffect } from "react";
import { addMessages, addPosts } from "../api";
import { getToken } from "../auth";

const CreateMessages = ({isLoggedIn}) => {
     if(!isLoggedIn) 
        return (<div className="sellings-main-container">You're not logged in!  Please log in to message about this post.</div>)

    const [content, setContent] = useState("");
    
    return (
        <div className="">
            <form 
                id="createMessages"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                        const results = await addMessages(content, )
                        setContent("")
                    }catch (err) {
                        console.log(err);}
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
                <input type="submit" value="Send Message" />
            </form>
        </div>
    )

}

export default CreateMessages;