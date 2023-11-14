import styles from './Register.module.css'
import { useState } from "react";
import * as userService from "../../services/userService";
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [users, setUsers] = useState([]);
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const navigate = useNavigate()

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };

    const emailChangeHandler = (e) => {
        setEmailValue(e.target.value);
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

        navigate("/myaccount")
    };
    return (
        <div
            className={`inner ${styles.registerBackground}`}
            data-topspace={50}
            data-bottomspace={20}
            data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
        >
            <div className="container">
                <h3 className="hdr4">Register</h3>
                <div className="easyBox full">
                    <h4 className="hdr5">
                        <span>Do you have an account with us?</span>
                    </h4>
                    <div className="row nomargin">
                        <div className="col-md-5">
                            {/* <h4 className="hdr2 special">Not registered yet? If you want to be up to date with us you can register here.</h4> */}
                            <input type="hidden" name="field_[]" defaultValue=" " />
                            {/* <input
                                className="btn btn-default"
                                type="submit    "
                                defaultValue="Register"
                                onClick={createUserClickHandler}
                            /> */}
                            <form
                                className="simpleForm"
                                onSubmit={userCreateHandler}
                            >
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            id="username"
                                            placeholder="enter your name"
                                            value={usernameValue}
                                            onChange={usernameChangeHandler}
                                        // onBlur={() => console.log('onBlur')}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail address</label>
                                        <input
                                            type="email"
                                            required=""
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="enter your e-mail address"
                                            value={emailValue}
                                            onChange={emailChangeHandler}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            placeholder="type your password"
                                            value={passwordValue}
                                            onChange={passwordChangeHandler}
                                        />
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Register</button>
                                        {/* <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                            Cancel
                                        </button> */}
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