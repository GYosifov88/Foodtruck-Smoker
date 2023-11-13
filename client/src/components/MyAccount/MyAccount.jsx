import { useState, useEffect } from "react";
import RegisterFormModal from "../RegisterFormModal/RegisterFormModal";
import * as userService from "../../services/userService";
import styles from './MyAccount.module.css'
import { Link } from 'react-router-dom';

export default function MyAccount({
    _id,
}) {
    const [users, setUsers] = useState([]);
    const [showCreate, setShowCreate] = useState(false);
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    useEffect(() => {
        userService.getAll()
            .then(result => setUsers(result))
            .catch(err => console.log(err))
    }, []);

    const createUserClickHandler = () => {
        setShowCreate(true);
    };

    const hideCreateUserModal = () => {
        setShowCreate(false);
    };

    const userCreateHandler = async (e) => {
        // Stop page from refreshing
        e.preventDefault();

        // Get data from form data
        const data = Object.fromEntries(new FormData(e.currentTarget));

        // Create new user at the server
        const newUser = await userService.create(data);

        // Add newly created user to the local state
        setUsers(state => [...state, newUser]);

        // Close the modal
        setShowCreate(false);
    };

    return (
        <div className="bg-2 section" id="contact">
            {showCreate && (
                <RegisterFormModal
                    onClose={hideCreateUserModal}
                    onCreate={userCreateHandler}
                />
            )}
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
                                <input
                                    className="btn btn-default"
                                    type="submit    "
                                    defaultValue="Register"                                    
                                    onClick={createUserClickHandler}
                                />
                                {/* <form
                                    className="simpleForm"
                                    action="./src/assets/form/form.php"
                                    method="post"
                                >
                                    <fieldset>
                                        <div className="form-group">
                                            <label>Your name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field_[]"
                                                placeholder="enter your name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>E-mail address</label>
                                            <input
                                                type="email"
                                                required=""
                                                className="form-control"
                                                name="email"
                                                placeholder="enter your e-mail address"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Your message</label>
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                name="field_[]"
                                                placeholder="type your message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="msg_subject"
                                            defaultValue="Contact Form"
                                        />
                                        <input type="hidden" name="field_[]" defaultValue=" " />
                                        <input
                                            className="btn btn-default"
                                            type="submit"
                                            defaultValue="Submit"
                                        />
                                    </fieldset>
                                </form> */}
                                <div className="successMsg" style={{ display: "none" }}>
                                    Message has been sent successfully!
                                </div>
                                <div className="errorMsg" style={{ display: "none" }}>
                                    An error occurred, please try again later.
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <h4 className="hdr2 special">Already have an account? Please login to proceed!</h4>
                                {/* <p>
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
                                    vitae, ultricies eget, tempor sit amet, ante.
                                </p> */}
                                <form
                                    className="newsletterForm simpleForm"
                                    action="./src/assets/form/form.php"
                                    method="post"
                                >
                                    <fieldset>
                                        {/* //ToDo - Login will be here */}

                                        {/* <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="username"
                                                name="username"
                                                id="username"
                                                value={usernameValue}
                                                required=""
                                                placeholder="username"
                                            />
                                            <input
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                id="password"
                                                value={passwordValue}
                                                required=""
                                                placeholder="password"
                                            />
                                        </div> */}
                                        {/* <input
                                            type="hidden"
                                            name="msg_subject"
                                            defaultValue="New Newsletter subscription"
                                        /> */}
                                        <input type="hidden" name="field_[]" defaultValue=" " />
                                        
                                        <button className="btn btn-default" type="button">Login</button>
                                        <button className="btn btn-default" type="button" as={Link} to={`/users/${_id}`} variant="primary">My Account</button>
                                    </fieldset>
                                </form>
                                {/* <div className="successMsg" style={{ display: "none" }}>
                                    Your e-mail has been added to our list!
                                </div>
                                <div className="errorMsg" style={{ display: "none" }}>
                                    Error, please try again later.
                                </div>
                                <div className="space50px" />
                                <p>Stop @ our Homebase and say hello!!!</p> */}
                                <div
                                    className="googleMap"
                                    data-location="Marine Ave. New York, NY"
                                    data-text="We are here!"
                                />
                            </div>
                        </div>
                    </div>
                    {/* / easyBox */}
                </div>
            </div>
        </div>

    )
}