export default function Gallery() {
    return (
        <div className="bg-1 section topOrnament" id="gallery">
            <div className="inner" data-topspace={30}>
                <div className="container">
                    <h3 className="hdr4">Have a look in our gallery!</h3>
                    <ul className="galleryContainer row">
                        <li className="col-md-3 col-sm-6">
                            <div className="galleryBox">
                                <div className="top">
                                    <span>Street-Life</span>
                                </div>
                                <div className="inner">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-1.jpg"
                                        data-rel="prettyPhoto[gallery1]"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/gallery-01.jpg"
                                            alt=" "
                                        />
                                        <div>
                                            <span>3 images</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="hiddenGallery">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                        data-rel="prettyPhoto[gallery1]"
                                        title="Title goes here"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                            alt=" "
                                        />
                                    </a>
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-3.jpg"
                                        data-rel="prettyPhoto[gallery1]"
                                        title="Title goes here"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/product-3.jpg"
                                            alt=" "
                                        />
                                    </a>
                                </div>
                            </div>
                            {/* / galleryBox */}
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <div className="galleryBox">
                                <div className="top">
                                    <span>Kitchen-Life</span>
                                </div>
                                <div className="inner">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-1.jpg"
                                        data-rel="prettyPhoto[gallery2]"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/gallery-02.jpg"
                                            alt=" "
                                        />
                                        <div>
                                            <span>2 images</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="hiddenGallery">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                        data-rel="prettyPhoto[gallery2]"
                                        title="Title goes here"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                            alt=" "
                                        />
                                    </a>
                                </div>
                            </div>
                            {/* / galleryBox */}
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <div className="galleryBox">
                                <div className="top">
                                    <span>Events</span>
                                </div>
                                <div className="inner">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-1.jpg"
                                        data-rel="prettyPhoto[gallery3]"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/gallery-03.jpg"
                                            alt=" "
                                        />
                                        <div>
                                            <span>3 images</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="hiddenGallery">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                        data-rel="prettyPhoto[gallery3]"
                                        title="Title goes here"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                            alt=" "
                                        />
                                    </a>
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-3.jpg"
                                        data-rel="prettyPhoto[gallery3]"
                                        title="Title goes here"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/product-3.jpg"
                                            alt=" "
                                        />
                                    </a>
                                </div>
                            </div>
                            {/* / galleryBox */}
                        </li>
                        <li className="col-md-3 col-sm-6">
                            <div className="galleryBox">
                                <div className="top">
                                    <span>Food</span>
                                </div>
                                <div className="inner">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-1.jpg"
                                        data-rel="prettyPhoto[gallery4]"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/gallery-04.jpg"
                                            alt=" "
                                        />
                                        <div>
                                            <span>2 images</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="hiddenGallery">
                                    <a
                                        href="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                        data-rel="prettyPhoto[gallery4]"
                                        title="Title goes here"
                                    >
                                        <img
                                            src="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                            alt=" "
                                        />
                                    </a>
                                </div>
                            </div>
                            {/* / galleryBox */}
                        </li>
                    </ul>
                    <h4 className="hdr3">Follow us on instagram!</h4>
                    <br />
                    <div className="text-center">
                        <a href="#" target="_blank">
                            <img
                                src="./src/assets/flavours/bigsmokebbq/images/instagram-btn.png"
                                alt=""
                            />
                        </a>
                    </div>
                    <br />
                    <br />
                    <h3 className="hdr2">Took a good shot of our truck?</h3>
                    <h4 className="hdr3">
                        We would be very glad if you could send your photos to us!
                    </h4>
                </div>
            </div>
        </div>

    )
}