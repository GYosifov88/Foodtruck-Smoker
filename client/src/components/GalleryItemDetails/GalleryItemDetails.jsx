import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext";
import * as galleryService from "../../services/galleryService";

import styles from './GalleryItemDetails.module.css'

export default function GalleryItemDetails() {
    const { userId } = useContext(AuthContext);
    const [photo, setPhoto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        galleryService.getOne(id)
            .then(result => setPhoto(result));
    }, [id]);

    return (
        <div className="bg-2 section" id="story">
            <div
                className={`inner repeated ${styles.photoDetailsBackground}`}
                data-topspace={45}
            >
                <div className="container">
                    <h3 className="hdr4">Photo Details</h3>
                    <div className="easyBox flat">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="bigger">
                                    Photo Title: {photo.title}
                                </p>
                                <p className="bigger">
                                    Category: {photo.category}
                                </p>
                                <p className="bigger">
                                    Place: {photo.place}
                                </p>

                                {userId === photo._ownerId && (
                                    <>
                                        <p className="bigger">
                                            <Link to={`/gallery/${id}/edit`}><button id="action-save" className={`btn ${styles.editBtn}`} type="submit">Edit</button></Link>
                                        </p>
                                        <p className="bigger">
                                            <button id="action-save" className={`btn ${styles.delBtn}`} type="submit">Delete</button>
                                        </p>
                                    </>
                                )}

                            </div>


                            <div className="col-md-6">
                                <div className="polaroidSlider pull-right">

                                    <div className="inner">
                                        <img
                                            src={photo.imageUrl}
                                            alt={photo.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <Link to={'/gallery'}><button id="action-cancel" className="btn" type="button" >
                                Cancel
                            </button>
                            </Link>

                        </div>
                    </div>
                    {/* / easyBox */}

                </div>
                {/* / container */}
            </div>
        </div>
    )
}