import { useState } from 'react';

export default function RegisterFormModal({
    onClose,
    onCreate
}) {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [emailValue, setEmailValue] = useState('');

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value);
    };

    const emailChangeHandler = (e) => {
        setEmailValue(e.target.value);
    };

    const resetFormHandler = () => {
        setUsernameValue('');
        setPasswordValue('');
        setEmailValue('');
    };
    
    const submitHandler = () => {
        console.log(usernameValue);
        console.log(passwordValue);
        console.log(ageValue);
        resetFormHandler();
    };

    return (
        <div className="overlay" >
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="user-container">
                    <header className="headers">
                        <h2>Register</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form
                        className="simpleForm"
                        onSubmit={onCreate}
                    >
                        <fieldset>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={usernameValue}
                                    onChange={usernameChangeHandler}
                                    placeholder="enter your username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={passwordValue}
                                    placeholder="enter your password"
                                    onChange={passwordChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={emailValue}
                                    onChange={emailChangeHandler}
                                    placeholder="enter your email"
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
                                defaultValue="Register"
                                onClick={submitHandler}
                            />
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};