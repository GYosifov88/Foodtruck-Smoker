import styles from './MyAccountEdit.module.css'
import { useNavigate, Link } from 'react-router-dom';
import * as authService from "../../services/authService";
import { useEffect, useState, useContext } from "react";
import AuthContext from '../../contexts/authContext';
import useForm from "../../hooks/useForm";


export default function UserEdit() {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        imageUrl: '',
    });

    const {
        userId,
    } = useContext(AuthContext);
    
    useEffect(() => {
        authService.getCurrentUser(userId)
            .then(result => {
                setUser(result);
            });
    }, [userId]);

    const UserEditHandler = async (values) => {
        try {
            await authService.edit(userId, values);

            navigate('/myaccount');
        } catch (err) {
            console.log(err);
        }
    }

    const { values, onChange, onSubmit } = useForm(UserEditHandler, user);

    return (
        <div
            className={`inner ${styles.myAccountEditBackground}`}
            data-topspace={50}
            data-bottomspace={20}
            data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
        >
            <div className="container">
                <h3 className="hdr4">Edit</h3>
                <div className="easyBox full">
                    <h4 className="hdr5">
                      
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
                                            required=""
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="enter your e-mail address"
                                            value={values.email}
                                            onChange={onChange}

                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            id="username"
                                            placeholder="type your username"
                                            value={values.username}
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="imageUrl">Image</label>                                        
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="imageUrl"
                                            id="imageUrl"
                                            placeholder="add your picture"
                                            value={values.imageUrl}   
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div id="form-actions">
                                        <button id="action-save" className="btn btn-default" type="submit">edit</button>
                                        <Link to={'/myaccount'}><button id="action-cancel" className="btn" type="button" >
                                            Cancel
                                        </button></Link>
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