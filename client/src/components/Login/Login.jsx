import styles from './Login.module.css'
import { useContext, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
import { useMemo } from 'react';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [error, setError] = useState('');

    const initialValues = useMemo(() => ({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }), [])

  
    const { values, errors, onChange, onSubmit } = useForm(
        async (values) => {
            try {
                await loginSubmitHandler(values);
            } catch (error) {
                console.error('Login failed:', error);
                setError(error.message);                
            }
        }, initialValues, validateLogin);
    
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
                            <input type="hidden" name="field_[]" defaultValue=" " />      
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
                                            name={LoginFormKeys.Email}
                                            id="email"
                                            placeholder="enter your e-mail"
                                            value={values[LoginFormKeys.Email]}
                                            onChange={onChange}
                                        
                                        />
                                        {errors[LoginFormKeys.Email] && (
                                            <p className="errorMsg">{errors[LoginFormKeys.Email]}</p>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name={LoginFormKeys.Password}
                                            id="password"
                                            placeholder="type your password"
                                            value={values[LoginFormKeys.Password]}
                                            onChange={onChange}
                                        />
                                        {errors[LoginFormKeys.Password] && (
                                            <p className="errorMsg">{errors[LoginFormKeys.Password]}</p>
                                        )}
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">Login</button>
                                        
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