import styles from './GalleryItemEdit.module.css'
import { useState, useEffect } from "react";
import * as galleryService from "../../services/galleryService";
import Path from '../../paths';
import { useNavigate, useParams, Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';

export default function GalleryEditItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState({
        title: '',
        category: '',
        place: '',
        imageUrl: '',
    });

    useEffect(() => {
        galleryService.getOne(id)
            .then(result => {
                setPhoto(result);
            })
            .catch(err => console.log(err))
    }, [id]);

    const PhotoEditHandler = async (values) => {
        try {
            await galleryService.edit(id, values);
            navigate(`${Path.Gallery}`);
        } catch (err) {
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(PhotoEditHandler, photo);

    return (
        <div
            className={`inner ${styles.photoEditBackground}`}
            data-topspace={50}
            data-bottomspace={20}
            data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
        >
            <div className="container">
                <h3 className="hdr4">Edit Photo</h3>
                <div className="easyBox full">
                    <h4 className="hdr5">
                        <span>Edit your Photo</span>
                    </h4>
                    <div className="row nomargin">
                        <div className="col-md-5">

                            <input type="hidden" name="field_[]" defaultValue=" " />

                            <form
                                className="simpleForm"
                                onSubmit={onSubmit}
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
                                            required="true"
                                            value={values.title}
                                            onChange={onChange}
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
                                            required="true"
                                            value={values.category}
                                            onChange={onChange}
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
                                            required="true"
                                            value={values.place}
                                            onChange={onChange}
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
                                            required="true"
                                            value={values.imageUrl}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Edit</button>
                                        <Link to={`${Path.Gallery}/${id}`}><button id="action-cancel" className="btn" type="button" >
                                            Cancel
                                        </button></Link>
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