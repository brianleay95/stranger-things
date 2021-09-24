import React, { useState, useEffect } from "react";
import { addPosts } from "../api";
import { getToken } from "../auth";

const CreateMessages = ({isLoggedIn}) => {
    // if(isLoggedIn) 
    // return (<div className="sellings-main-container">You're stilled logged in!  Log out before registering as a different user.</div>)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation ] = useState("");
    const [willDeliver, setWillDeliver ] = useState(false);

    return (
        <div className="">
            <form 
                id="createPosts"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                        const results = await addPosts(title, description, price, location, willDeliver)
                        setTitle("")
                        setDescription("")
                        setPrice("")
                        setLocation("")
                        setWillDeliver(false)
                    }catch (err) {
                        console.log(err);}
                }}
                >
                <fieldset className="">
                    <label htmlFor="Title">Title</label>
                    <input type="text"
                            id="Title"
                            placeholder="Title"
                            value={title} 
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}/>

                </fieldset>
                <fieldset className="">
                    <label htmlFor="Description">Description</label>
                    <input type="text"
                            id="Description"
                            placeholder="Description"
                            value={description} 
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}/>

                </fieldset>
                <fieldset className="">
                    <label htmlFor="Price">Price</label>
                    <input type="text"
                            id="Price"
                            placeholder="Price"
                            value={price} 
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}/>

                </fieldset>
                <fieldset className="">
                    <label htmlFor="Location">Location</label>
                    <input type="text"
                            id="Location"
                            placeholder="Location"
                            value={location} 
                            onChange={(event) => {
                                setLocation(event.target.value);
                            }}/>
                </fieldset>
                <fieldset className="">
                    <label htmlFor="Will Deliver">Will Deliver</label>
                    <input type="checkbox"
                            id="willDeliver"
                            value={location} 
                            onChange={(event) => {
                                setWillDeliver(!willDeliver);
                            }}/>
                </fieldset>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default CreatePosts;