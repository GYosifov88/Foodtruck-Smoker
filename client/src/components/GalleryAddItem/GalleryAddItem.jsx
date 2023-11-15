import styles from './GalleryAddItem.module.css'
import { useState } from "react";
import * as galleryService from "../../services/galleryService";
import { useNavigate } from 'react-router-dom';

export default function GalleryAddItem(){
    const [pictures, setPictures] = useState([]);
    const [categoryValue, setCategoryValue] = useState('');
    const [titleValue, setTitleValue] = useState('');
    const [placeValue, setplaceValue] = useState('');
    const [imageUrlValue, setimageUrlValue] = useState('');

    const navigate = useNavigate()

    const categoryChangeHandler = (e) => {
        setCategoryValue(e.target.value);
    };

    const titleChangeHandler = (e) => {
        setTitleValue(e.target.value);
    };

    const placeChangeHandler = (e) => {
        setplaceValue(e.target.value);
    };

    const imageUrlChangeHandler = (e) => {
        setimageUrlValue(e.target.value);
    };

    const PhotoAddHandler = async (e) => {
        // Stop page from refreshing
        e.preventDefault();

        // Get data from form data
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Create new user at the server
        const newPhoto = await galleryService.create(data);

        // Add newly created user to the local state
        setPictures(state => [...state, newPhoto]);

        navigate("/gallery")
    }
    return (
        <div
            className={`inner ${styles.photoAddBackground}`}
            data-topspace={50}
            data-bottomspace={20}
            data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
        >
            <div className="container">
                <h3 className="hdr4">Add Photo</h3>
                <div className="easyBox full">
                    <h4 className="hdr5">
                        <span>Add your photos!</span>
                    </h4>
                    <div className="row nomargin">
                        <div className="col-md-5">
                            {/* <h4 className="hdr2 special">Not registered yet? If you want to be up to date with us you can register here.</h4> */}
                            <input type="hidden" name="field_[]" defaultValue=" " />
                            {/* <input
                                className="btn btn-default"
                                type="submit    "
                                defaultValue="Register"
                                onClick={createUserClickHandler}
                            /> */}
                            <form
                                className="simpleForm"
                                onSubmit={PhotoAddHandler}
                            >
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="title">Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="title"
                                            id="title"
                                            placeholder="enter the title"
                                            value={titleValue}
                                            onChange={titleChangeHandler}
                                        // onBlur={() => console.log('onBlur')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="category">Category</label>
                                        <select 
                                        type='select'
                                        name="category" 
                                        id="category"
                                        className="form-control"
                                        placeholder="select category"
                                        value={categoryValue}
                                        onChange={categoryChangeHandler}
                                        >
                                            <option value="Kitchen-Life">Kitchen-Life</option>
                                            <option value="Street-Life">Street-Life</option>
                                            <option value="Events">Events</option>
                                            <option value="Food">Food</option>
                                        </select>                                       
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="place">Place</label>                                        
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="place"
                                            id="place"
                                            placeholder="add where it was"
                                            value={placeValue}
                                            onChange={placeChangeHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="imageUrl">Image</label>                                        
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="imageUrl"
                                            id="imageUrl"
                                            placeholder="add your picture"
                                            value={imageUrlValue}   
                                            onChange={imageUrlChangeHandler}
                                        />
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Add</button>
                                        {/* <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                            Cancel
                                        </button> */}
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                {/* / easyBox */}
            </div>
        </div>
    )
}