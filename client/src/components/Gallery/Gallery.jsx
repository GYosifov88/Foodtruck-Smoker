import GalleryItem from '../GalleryItem/GalleryItem';
import { useState, useEffect } from 'react';
import * as galleryService from "../../services/galleryService";
import styles from './Gallery.module.css';
import { Link } from 'react-router-dom';

export default function Gallery() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        galleryService.getAllPictures()
            .then(result => setPictures(result))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className="bg-1 section topOrnament" id="gallery">
            <div className="inner" data-topspace={30}>
                <div className="container">
                    <h3 className="hdr4">Have a look in our gallery!</h3>

                    <div className={`inner ${styles.picturesList}`}>

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

                    </div>                    
                    <h3 className="hdr2">Took a good shot of our truck?</h3>
                    <h4 className="hdr3">
                        We would be very glad if you could upload your photos here!
                    </h4>
                    <div id="form-actions" className={styles.uploadBtnDiv}>
                        <button type="submit" className={styles.uploadBtn} ><Link to="/gallery/add">Upload</Link></button>
                    </div>


                    {/* <h4 className="hdr3">Follow us on instagram!</h4>
                    <br />
                    <div className="text-center">
                        <a href="#" target="_blank">
                            <img
                                src="./src/assets/flavours/bigsmokebbq/images/instagram-btn.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <br />
                    <br /> */}
                </div>
            </div>
        </div>

    )
}