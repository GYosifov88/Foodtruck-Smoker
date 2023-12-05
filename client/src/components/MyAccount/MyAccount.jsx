import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import GalleryItem from '../GalleryItem/GalleryItem';
import AuthContext from '../../contexts/authContext';
import * as authService from "../../services/authService"
import * as galleryService from "../../services/galleryService"
import Path from '../../paths';
import styles from './MyAccount.module.css'


export default function MyAccount() {
    const [user, setUser] = useState({});
    const [pictures, setPictures] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        isAuthenticated,
        username,
        email,
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
        <>
            {isAuthenticated && userId && (
                <div className="bg-2 section" id="contact">
                    <div
                        className={`inner ${styles.myAccountBackground}`}
                        data-topspace={50}
                        data-bottomspace={20}
                        data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
                    >
                        <div className="container">
                            <h3 className="hdr4">My Account</h3>
                            <div className={`easyBox full ${styles.myAccountDetbackground}`}>
                                <h4 className={`hdr5 ${styles.myAccountHeadings}`}>
                                    <span>Username: {username}</span>
                                </h4>
                                <h4 className={`hdr5 ${styles.myAccountHeadings}`}>
                                    <span>Email: {email}</span>
                                </h4>
                                <h4 className={`hdr5 ${styles.myAccountHeadings}`}>My Pictures: <Link to={Path.MyAccountGallery}><button id="action-cancel" className="btn" type="button" >
                                        Gallery
                                        </button>
                                        </Link></h4>

                                <div className={`inner ${styles.myPicturesList}`}>
                                    {/* <span>                                        
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
                                    </span> */}
                                    {/* {pictures.length === 0 && (
                                        <h6>No pictures yet...!</h6>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isAuthenticated && (
                <div className="bg-2 section" id="contact">

                    <div
                        className={`inner ${styles.myAccountBackground}`}
                        data-topspace={50}
                        data-bottomspace={20}
                        data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
                    >
                        <div className="container">
                            <h3 className="hdr4">My Account</h3>
                            <div className="easyBox full">
                                <h4 className="hdr5">
                                    <span>Do you have an account with us?</span>
                                </h4>
                                <div className="row nomargin">
                                    <div className="col-md-5">
                                        <h4 className="hdr2 special">Not registered yet? If you want to be up to date with us you can register here.</h4>
                                        <input type="hidden" name="field_[]" defaultValue=" " />
                                        <button type="submit" className="btn btn-default" ><Link to={Path.Register}>Register</Link></button>

                                    </div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-5">
                                        <h4 className="hdr2 special">Already have an account? Please login to proceed!</h4>


                                        <button className="btn btn-default" type="button"><Link to={Path.Login}>Login</Link></button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </>
    )
}