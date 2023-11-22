import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';
import * as authService from "../../services/authService"
import styles from './MyAccount.module.css'
import { Link } from 'react-router-dom';

export default function MyAccount() {
    const [user, setUser] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const {
        isAuthenticated,
        username,
        email,
    } = useContext(AuthContext);


    useEffect(() => {
        authService.getCurrentUser(id)
            .then(result => setUser(result))
            .catch((err) => {
                navigate('/');
            });
    }, [id]);

    return (
        <>
            {isAuthenticated && (
                <div className="bg-2 section" id="contact">
                    <div
                        className={`inner ${styles.userAccountDetailsBackground}`}
                        data-topspace={50}
                        data-bottomspace={20}
                        data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
                    >
                        <div className="container">
                            <h3 className="hdr4">My Account</h3>
                            <div className="easyBox full">
                                <h4 className="hdr5">
                                    <span>Username: {username}</span>
                                </h4>
                                <h4 className="hdr5">
                                    <span>Email: {email}</span>
                                </h4>
                                <p className="bigger">
                                    <button id="action-save" className={`btn ${styles.editBtn}`} type="submit">Edit</button>
                                </p>
                                <p className="bigger">
                                    <button id="action-save" className={`btn ${styles.delBtn}`} type="submit">Delete</button>

                                </p>

                            </div>
                            {/* / easyBox */}
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
                                        <button type="submit" className="btn btn-default" ><Link to="/register">Register</Link></button>

                                    </div>
                                    <div className="col-md-2"></div>
                                    <div className="col-md-5">
                                        <h4 className="hdr2 special">Already have an account? Please login to proceed!</h4>


                                        <button className="btn btn-default" type="button"><Link to="/login">Login</Link></button>

                                    </div>
                                </div>
                            </div>
                            {/* / easyBox */}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}