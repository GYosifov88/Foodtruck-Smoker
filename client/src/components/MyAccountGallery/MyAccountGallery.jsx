import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import GalleryItem from '../GalleryItem/GalleryItem';
import AuthContext from '../../contexts/authContext';
import * as authService from "../../services/authService"
import * as galleryService from "../../services/galleryService"
import Path from '../../paths';
import styles from './MyAccountGallery.module.css'

export default function MyAccountGallery() {
    const [user, setUser] = useState({});
    const [pictures, setPictures] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        isAuthenticated,
        userId,
    } = useContext(AuthContext);

    useEffect(() => {
        if (userId) {
            authService.getCurrentUser(userId)
                .then(result => setUser(result))
                .catch((err) => {
                    navigate(`${Path.Home}`);
                });
            galleryService.getAllPhotosOfUser(userId)
                .then(result => setPictures(result))
                .catch(err => console.log(err))
        }

    }, [id, userId]);


    return (
        <div className="bg-1 section topOrnament" id="gallery">
            <div className="inner" data-topspace={30}>
                <div className="container">
                    <h3 className="hdr4">My Gallery!</h3>

                    <div className={`inner ${styles.picturesList}`}>

                        <span>
                            {pictures.map(pic => (
                                <GalleryItem
                                    key={pic._id}
                                    picId={pic._id}
                                    category={pic.category}
                                    title={pic.title}
                                    place={pic.place}
                                    imageUrl={pic.imageUrl}
                                />
                            ))}
                        </span>

                        {pictures.length === 0 && (
                            <h6>No pictures yet...!</h6>
                        )}

                    </div>
                    <h3 className="hdr2">Took a good shot of our truck?</h3>
                    
                    {isAuthenticated && (
                        <div id="form-actions" className={styles.uploadBtnDiv}>
                            <button type="submit" className={styles.uploadBtn} ><Link to={Path.GalleryAdd}>Upload</Link></button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

