const MenuItem = ({
    category,
    title,
    price,
    description,
    imageUrl,
}) => {
    return (
        <>
        <div className="media">
            <a
                className="pull-left"
                href={imageUrl}
                data-rel="prettyPhoto[menu1]"
            >
                <div className="roundedImg" data-size={54}>
                    <img
                        className="media-object"
                        src={imageUrl}
                        alt=" "
                    />
                </div>
            </a>
            <div className="media-body">
                <span className="title">{title}</span>
                <p>
                    {description}
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