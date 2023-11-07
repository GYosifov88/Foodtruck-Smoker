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
                <div className="flexFull flexslider loading-slider text-center">
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
                </div>
                {/* / flexslider */}
                {/* ******************* */}
                {/* ** CIRCLE SLIDER ** */}
                {/*
    <div class="space50px"></div>
    <div class="container">
<div class="row">
  <div class="col-md-8">
    <div class="flexFade flexslider loading-slider text-right">
      <ul class="slides">
        <li>
          <div class="descArea">
            <h4>Hot from<br>the Grill</h4>
            <hr>
            <h5>Fire roasted T-Bone Steak with fries</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt
            </p>
            <span class="price"><em>$</em>11<span>99</span></span>

          </div>
          <div class="roundedImg" data-size="320">
            <img class="media-object" src="../assets/flavours/bigsmokebbq/images/content/photo-3.jpg" alt=" ">
          </div>
        </li>
        <li>
          <div class="descArea">
            <h4>Our <br>Starters</h4>
            <hr>
            <h5>Rib Eye Burger with homemade sauce</h5>
            <p>
              Pellentesque eget augue et ipsum laoreet ultrices eget ut est. Donec tincidunt justo nec lobortis molestie.
            </p>
            <span class="price"><em>$</em>9<span>99</span></span>

          </div>
          <div class="roundedImg" data-size="320">
            <img class="media-object" src="../assets/flavours/bigsmokebbq/images/content/photo-4.jpg" alt=" ">
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="col-md-4">
    <h4 class="hdr7">About Us</h4>

    <div class="roundedImg pull-right" data-size="160">
      <img class="media-object" src="../assets/flavours/bigsmokebbq/images/content/photo-5.jpg" alt=" ">
    </div>
    <p class="bigger highlighted">
      Hello Foody! We have traveled countless miles, hundreds of sailing through storms to find out where is the best and freshest food in the world.
      <br>
      Ultimately we have brought them to our restaurant to let you enjoy this priceless treasure.<br><br>
      Please consider yourself. Good Appetite!<br>
      Your Chef Team<br>
    </p>

  </div>
</div>
    </div>
    <div class="space50px"></div>
    */}
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