import styles from './GalleryItemDetails.module.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as galleryService from "../../services/galleryService";

export default function GalleryItemDetails() {
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
                                    <h3>Photo Title:</h3>
                                    <input type="text" value={photo.title} disabled="true" />
                                </p>
                                <p className="bigger">
                                    <h3>Category:</h3>
                                    <input type="text" value={photo.category} disabled="true" />
                                </p>
                                <p className="bigger">
                                    <h3>Place:</h3>
                                    <input type="text" value={photo.place} disabled="true" />
                                </p>
                                <p className="bigger">
                                    <button id="action-save" className={`btn ${styles.editBtn}`} type="submit">Edit</button>
                                </p>
                                <p className="bigger">
                                    <button id="action-save" className={`btn ${styles.delBtn}`} type="submit">Delete</button>
                                    
                                </p>
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
                        </div>
                    </div>
                    {/* / easyBox */}

                </div>
                {/* / container */}
            </div>
        </div>
    )
}