import styles from './GalleryAddItem.module.css'
import { useState } from "react";
import * as galleryService from "../../services/galleryService";
import { useNavigate, Link } from 'react-router-dom';
import Path from '../../paths';

export default function GalleryAddItem() {
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

        const newPhoto = await galleryService.create(data);

        setPictures(state => [...state, newPhoto]);

        navigate(`${Path.Gallery}`)
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
                            <input type="hidden" name="field_[]" defaultValue=" " />
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
                                            required={true}
                                            value={titleValue}
                                            onChange={titleChangeHandler}
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
                                            required={true}
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
                                            required={true}
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
                                            required={true}
                                            value={imageUrlValue}
                                            onChange={imageUrlChangeHandler}
                                        />
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Add</button>
                                        <Link to={Path.Gallery}><button id="action-cancel" className="btn" type="button" >
                                            Cancel
                                        </button>
                                        </Link>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}