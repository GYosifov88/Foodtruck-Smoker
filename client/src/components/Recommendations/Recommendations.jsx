import styles from './Recommendations.module.css'

export default function Recommendations() {
    return (
        <div className="bg-1 section" id="menu">
            <div
                className={`inner ${styles.recomendationsBackground}`}
                data-image="./src/assets/flavours/bigsmokebbq/images/content/background-1.jpg"
            >
                <div className="container">
                    <h3 className="hdr1 type2">Get the best BBQ in Town</h3>
                </div>
                {/* ************************* */}
                {/* ** FULL PRODUCT SLIDER ** */}
                {/* <div className="flexFull flexslider loading-slider text-center">
                    <ul className="slides">
                        <li>
                            <div className="container">
                                <img
                                    src="./src/assets/flavours/bigsmokebbq/images/content/sliderphoto-1.png"
                                    alt=" "
                                />
                                <h3 className="hdr2">
                                    Slow grilled pulled pork burger - with homebrewed beer
                                </h3>
                                <h4 className="hdr3">
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas.
                                </h4>
                                <div className="priceHeader">
                                    <span className="lft">Slow grilled pulled pork</span>
                                    <span className="price">
                                        <span className="el_1">just</span>
                                        <span className="el_2">$</span>
                                        <span className="el_3">12</span>
                                        <span className="el_4">99</span>
                                    </span>
                                    <span className="rt">+ special twisted fries</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="container">
                                <img
                                    src="./src/assets/flavours/bigsmokebbq/images/content/sliderphoto-1.png"
                                    alt=" "
                                />
                                <h3 className="hdr2">
                                    Slow grilled pulled pork burger - with homebrewed beer
                                </h3>
                                <h4 className="hdr3">
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas.
                                </h4>
                                <div className="priceHeader">
                                    <span className="lft">Slow grilled pulled pork</span>
                                    <span className="price">
                                        <span className="el_1">just</span>
                                        <span className="el_2">$</span>
                                        <span className="el_3">12</span>
                                        <span className="el_4">99</span>
                                    </span>
                                    <span className="rt">+ special twisted fries</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> */}
                <div className="row nomargin threeBoxes" id="location">
                    <div className="col-md-4 col-sm-4">
                        <div className='home full-width-photo'>
                            <img className='homepic' src="./src/assets/food_images/brisket-flat-mk4-signals-38-of-47.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className='home full-width-photo'>
                            <img className='homepic' src="./src/assets/food_images/Large-barbecue-smoker-grill.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="home full-width-photo">
                            <h3 id='headtext' className="big">Meet the first smoker food truck in Bulgaria. We are two very passionate smoking meat enthusiasts. Come and meet us and enjoy the rich tense flavour of smoked meat.</h3>
                            {/* <div className="tweets">
                                <div>
                                    <p>daskjdghbasdjkgasjkdih</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="text-center">
                        <div className='home full-width-photo'>
                            <h4>We are the first Food truck with smoked meat</h4>
                            <img className='homepic' src="./src/assets/food_images/brisket-flat-mk4-signals-38-of-47.jpg" alt="" />
                        </div>

                    </div>
                </div> */}
                <div className="container">
                    <div className="text-center">
                        <img
                            src="./src/assets/flavours/bigsmokebbq/images/content/photo-2.png"
                            alt=" "
                        />
                    </div>
                    <br />
                    <h3 className="hdr4">Our recommendations</h3>
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="prodBox pull-left">
                                <div className="frameImg">
                                    <img
                                        src="./src/assets/flavours/bigsmokebbq/images/content/product-1.jpg"
                                        alt=" "
                                    />
                                </div>
                                <div className="inner">
                                    <h4>Slow grilled pulled pork sandwich</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eius Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiu.
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>$</em>11<span>99</span>
                                    </span>
                                    <a href="#" className="btn btn-primary btn-sm">
                                        order now!
                                    </a>
                                </div>
                            </div>
                            {/* / prodBox */}
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="prodBox type2">
                                <div className="frameImg">
                                    <img
                                        src="./src/assets/flavours/bigsmokebbq/images/content/product-2.jpg"
                                        alt=" "
                                    />
                                </div>
                                <div className="inner">
                                    <h4>Rib Eye Burger with homemade sauce</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                        eius Lorem, consectetur adipisicing elit, sed do eiu.
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>$</em>9<span>99</span>
                                    </span>
                                    <a href="#" className="btn btn-primary btn-sm">
                                        order now!
                                    </a>
                                </div>
                            </div>
                            {/* / prodBox */}
                        </div>
                        <div className="clearfix visible-sm" />
                        <div className="col-md-4 col-sm-12">
                            <div className="prodBox type3 pull-right">
                                <div className="frameImg">
                                    <img
                                        src="./src/assets/flavours/bigsmokebbq/images/content/product-3.jpg"
                                        alt=" "
                                    />
                                </div>
                                <div className="inner">
                                    <h4>Black Angus Steak with coleslaw</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetudo eius Lorem ipsum dolor
                                        sit amet, consectetur adipisicing elit, sed do eiu.
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>$</em>9<span>99</span>
                                    </span>
                                    <a href="#" className="btn btn-primary btn-sm">
                                        order now!
                                    </a>
                                </div>
                            </div>
                            {/* / prodBox */}
                        </div>
                    </div>
                    {/* / row */}
                    <h3 className="hdr2">Whatever you choose</h3>
                    <h4 className="hdr3">
                        Be 100% sure, that our Food is entirely made of biological ingredients
                    </h4>
                </div>
            </div>
        </div>

    )
}