import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styles from './UserAccountDetails.module.css'


export default function UserAccountDetails() {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const { _id } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/users/${_id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Not found');
                }

                return res.json();
            })
            .then(setUser)
            .catch((err) => {
                navigate('/');
            });
    }, [_id]);


    return (
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
                            <span>{user.username}</span>
                        </h4>
                        <h4 className="hdr5">
                            <span>{user.email}</span>
                        </h4>
                        <span className="accDetails">{user.email}</span>
                    </div>
                    {/* / easyBox */}
                </div>
            </div>
        </div>

    )
}