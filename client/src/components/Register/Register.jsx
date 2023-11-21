import styles from './Register.module.css'
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

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
                        <span>Do not have an account with us?</span>
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
                                onSubmit={onSubmit}
                            >
                                <fieldset>                                    
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail address</label>
                                        <input
                                            type="email"
                                            required=""
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="enter your e-mail address"
                                            value={values[RegisterFormKeys.Email]}
                                            onChange={onChange}

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
                                            value={values[RegisterFormKeys.Password]}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Confirm Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="confirm your password"
                                            value={values[RegisterFormKeys.ConfirmPassword]}
                                            onChange={onChange}
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