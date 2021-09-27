import React, { useState, useEffect } from "react";
import { editPost } from "../api";
import { getToken } from "../auth";

const EditPosts = ({post, isLoggedIn, setCurrentPage, isLoading}) => {
    if(!isLoggedIn) 
        return (<div className="edit-posts-main-container">You're stilled logged in!  Log out before registering as a different user.</div>)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation ] = useState("");
    const [willDeliver, setWillDeliver ] = useState(false);
    const [edited, setEdited] = useState(false);

   useEffect(async () => {
        setTitle(post.title)
        setDescription(post.description)
        setPrice(post.price)
        setLocation(post.location)
        setWillDeliver(post.willDeliver)
      }, []);
    console.log('id: ', post._id)


    return edited ? <div>Post Updated!</div> : 
    <div className="">
            <form 
                id="editPost"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                        const results = await editPost(post._id, title, description, price, location, willDeliver)
                        setTitle("")
                        setDescription("")
                        setPrice("")
                        setLocation("")
                        setWillDeliver(false)
                        setEdited(true)
                    }catch (err) {
                        console.log(err);}
                }}
                >
                <fieldset className="">
                    <label htmlFor="Title">Title</label>
                    <input type="text"
                            id="Title"
                            placeholder={post.title}
                            defaultValue={post.title} 
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}/>

                </fieldset>
                <fieldset className="">
                    <label htmlFor="Description">Description</label>
                    <input type="text"
                            id="Description"
                            placeholder={post.description}
                            defaultValue={post.description} 
                            onChange={(event) => {
                                setDescription(event.target.value);
                            }}/>

                </fieldset>
                <fieldset className="">
                    <label htmlFor="Price">Price</label>
                    <input type="text"
                            id="Price"
                            placeholder={post.price}
                            defaultValue={post.price} 
                            onChange={(event) => {
                                setPrice(event.target.value);
                            }}/>

                </fieldset>
                <fieldset className="">
                    <label htmlFor="Location">Location</label>
                    <input type="text"
                            id="Location"
                            placeholder={post.location}
                            defaultValue={post.location} 
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

}

export default EditPosts;