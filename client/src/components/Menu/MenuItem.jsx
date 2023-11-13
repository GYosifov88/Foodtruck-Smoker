import { Link } from 'react-router-dom';
import { useState } from 'react';
const MenuItem = ({
    menuid,
    title,
    price,
    imageUrl,
    onInfoClick
}) => {
    const [showDetails, setShowDetails] = useState(false)

    const infoClickHandler = () => {
        onInfoClick(menuid);
    };

    console.log(menuid);

    
    return (
        <>
       
        <div className="media">
            <Link
                className="pull-left"
                
                data-rel="prettyPhoto[menu1]"
            >
                <div className="roundedImg" data-size={54}>
                    <img
                        className="media-object"
                        src={imageUrl}
                        alt=" "
                    />
                </div>
            </Link>
            <div className="media-body">
                <span className="title">{title}</span>
                <p>
                <Link to="/menu" className="btn btn-primary btn-sm" onClick={infoClickHandler}>
                                        See Details!
                                        </Link>
                </p>
                <span className="price">
                    <em>lv</em>{price}
                </span>
            </div>
        </div>
        <hr />

        </>
    )
}

export default MenuItem