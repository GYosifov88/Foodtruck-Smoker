import styles from './Login.module.css'
import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { useMemo } from 'react';

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const initialValues = useMemo(() => ({
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    }), [])

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, initialValues);

    return (
        <div
            className={`inner ${styles.loginBackground}`}
            data-topspace={50}
            data-bottomspace={20}
            data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
        >
            <div className="container">
                <h3 className="hdr4">Login</h3>
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
                                onSubmit={onSubmit}
                            >
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="username">E-mail</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name={LoginFormKyes.Email}
                                            id="email"
                                            placeholder="enter your e-mail"
                                            value={values[LoginFormKyes.Email]}
                                            onChange={onChange}
                                        // onBlur={() => console.log('onBlur')}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name={LoginFormKyes.Password}
                                            id="password"
                                            placeholder="type your password"
                                            value={values[LoginFormKyes.Password]}
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Login</button>

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