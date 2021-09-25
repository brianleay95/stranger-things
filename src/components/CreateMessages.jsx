import React, { useState, useEffect } from "react";
import { addMessages, addPosts } from "../api";
import { getToken } from "../auth";


const CreateMessages = ({postID, isLoggedIn, setIsLoading}) => {
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
                        const results = await addMessages(content, postID)
                        setContent("")
                    }catch (err) {
                        console.log(err);}
                }}
                >
                <fieldset className="">
                    <label htmlFor="Title">Title</label>
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
    )

}

export default CreatePosts;