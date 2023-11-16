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
                                        src="../src/assets/food_images/Pulled-Pork-Slow-Cooker.jpg"
                                        alt=" "
                                    />
                                </div>
                                <div className="inner">
                                    <h4>Slow grilled pulled pork sandwich</h4>
                                    <p>
                                    Homemade chabata filled with our slowly smoked pulled pork, smoked cheese, homemade spicy salsa with tomatoes, chilli peppers, garlic, parsley and onion
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>lv</em>17<span>00</span>
                                    </span>
                                    
                                </div>
                            </div>
                            {/* / prodBox */}
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="prodBox type2">
                                <div className="frameImg">
                                    <img
                                        src="../src/assets/food_images/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2016__07__20160801-sous-vide-brisket-guide-35-63bbc7bc88e24f1789427ee9ff2728b3.jpg"
                                        alt=" "
                                    />
                                </div>
                                <div className="inner">
                                    <h4>Beef Brisket</h4>
                                    <p>
                                    Tender beef brisket seasoned only with black pepper, salt and brown sugar. Marinated for 24 hourse before gently smoked with oak wood.
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>lv</em>20<span>00</span>
                                    </span>
                                </div>
                            </div>
                            {/* / prodBox */}
                        </div>
                        <div className="clearfix visible-sm" />
                        <div className="col-md-4 col-sm-12">
                            <div className="prodBox type3 pull-right">
                                <div className="frameImg">
                                    <img
                                        src="../src/assets/food_images/ribeye-burger.jpg"
                                        alt=" "
                                    />
                                </div>
                                <div className="inner">
                                    <h4>Rib Eye Burger with homemade sauce</h4>
                                    <p>
                                    Classic beef rib eye burger slowly cooked seasoned nicely, with letuce, pickled onions, tomatoes, halapeno and our homemade sauce with smoked cheese.
                                    </p>
                                    <span className="price">
                                        <small>just</small>
                                        <em>lv</em>16<span>00</span>
                                    </span>
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