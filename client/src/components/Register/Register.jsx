import styles from './Register.module.css'
import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";
import Path from '../../paths';


const RegisterFormKeys = {
    Email: 'email',
    Username: 'username',
    Password: 'password',
    ConfirmPassword: 'confirm_password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [error, setError] = useState('');
    const initialValues = useMemo(() => ({
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    }), [])

    const validatePasswords = (values) => {
        const errors = {};

        if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]) {
            errors[RegisterFormKeys.ConfirmPassword] = "Passwords don't match";
        }

        return errors;
    };

    const { values, errors, onChange, onSubmit } = useForm(
        async (values) => {
            try {
                await registerSubmitHandler(values);
            } catch (error) {
                console.error('Register failed:', error);
                setError(error.message);
            }
        },      
        initialValues, validatePasswords);

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

                            <input type="hidden" name="field_[]" defaultValue=" " />

                            <form
                                className="simpleForm"
                                onSubmit={onSubmit}
                            >
                                <fieldset>
                                    <div className="form-group">
                                        <label htmlFor="email">E-mail address</label>
                                        <input
                                            type="email"
                                            required="true"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="enter your e-mail address"
                                            value={values[RegisterFormKeys.Email]}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="username"
                                            required="true"
                                            id="username"
                                            className="form-control"
                                            name="username"
                                            placeholder="enter your username"
                                            value={values[RegisterFormKeys.Username]}
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
                                            name="confirm_password"
                                            id="confirm_password"
                                            placeholder="confirm your password"
                                            value={values[RegisterFormKeys.ConfirmPassword]}
                                            onChange={onChange}
                                        />
                                        {errors[RegisterFormKeys.ConfirmPassword] && (
                                            <p className={`errorMsg ${styles.errorText}`}>{errors[RegisterFormKeys.ConfirmPassword]}</p>
                                        )}
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Register</button>
                                        <Link to={Path.Home}><button id="action-cancel" className="btn" type="button" >
                                            Cancel
                                        </button>
                                        </Link>
                                    </div>
                                    {error && (
                                            <p className="errorMsg">{error}</p>
                                        )}
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}