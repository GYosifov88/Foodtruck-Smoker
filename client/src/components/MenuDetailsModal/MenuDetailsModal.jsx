import { useEffect, useState } from 'react';
import styles from './MenuDetailsModal.module.css'
import * as menuService from '../../services/menuService';

export default function MenuDetailsModal({
    onClose,
    menuid
}) {

    const [menu, setMenu] = useState({});

    useEffect(() => {
        menuService.getOne(menuid)
            .then(result => setMenu(result));
    }, [menuid]);

    return (
        <div className="overlay" >
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
            <div >
                            <div className="prodBox type2">
                                <div className="frameImg">
                                    <img
                                        src={menu.imageUrl}
                                        alt={menu.title}
                                    />
                                </div>
                                <div className="inner">
                                    <h4>{menu.title}</h4>
                                    <p>
                                        {menu.description}
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>lv</em><span>{menu.price}</span>
                                    </span>
                                    <button className={`btn close ${styles.insideModalBtn}`} onClick={onClose}>Close</button>
                                </div>
                            </div>
                            {/* / prodBox */}
                        </div>
            </div>
        </div>
    )
}