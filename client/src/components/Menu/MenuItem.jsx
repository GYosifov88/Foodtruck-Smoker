import { Link } from 'react-router-dom';
import Path from '../../paths';

const MenuItem = ({
    menuid,
    title,
    price,
    imageUrl,
    onInfoClick
}) => {
    
    const infoClickHandler = () => {
        onInfoClick(menuid);
    };

    return (
        <>

            <div className="media">
                <Link
                    className="pull-left"

                    data-rel="prettyPhoto[menu1]"
                >
                    <div className="roundedImg" data-size={54}>
                        <img
                            className="media-object menu-img"
                            src={imageUrl}
                            alt=" "
                        />
                    </div>
                </Link>
                <div className="media-body">
                    <span className="title">{title}</span>
                    <p>
                        <Link to={Path.Menu} className="btn btn-primary btn-sm" onClick={infoClickHandler}>
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