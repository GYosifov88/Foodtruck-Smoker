// import { useState, useEffect } from "react";
// import RegisterFormModal from "../RegisterFormModal/RegisterFormModal";
// import * as userService from "../../services/userService";
import styles from './MyAccount.module.css'
import { Link } from 'react-router-dom';

export default function MyAccount({
    _id,
}) {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     userService.getAll()
    //         .then(result => setUsers(result))
    //         .catch(err => console.log(err))
    // }, []);

    return (
        <div className="bg-2 section" id="contact">
            {/* {showCreate && (
                <RegisterFormModal
                    onClose={hideCreateUserModal}
                    onCreate={userCreateHandler}
                />
            )} */}
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

    )
}