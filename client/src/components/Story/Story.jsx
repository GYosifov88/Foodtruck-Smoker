import styles from './Story.module.css'

export default function Story() {
    return (
        <div className="bg-2 section" id="story">
            <div
                className={`inner repeated ${styles.storyBackground}`}
                data-topspace={45}
                data-image="./src/assets/flavours/bigsmokebbq/images/content/background-4.jpg"
            >
                <div className="container">
                    <h3 className="hdr4">Read our incredible story!</h3>
                    <div className="easyBox flat">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>It all started with a ...</h4>
                                <p className="bigger">
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
                                    vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
                                    amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                                    placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
                                    pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae,
                                    ornare sit amet, wisi.
                                </p>
                                <p className="bigger">
                                    Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                                    rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
                                    turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id
                                    cursus faucibus, tortor neque egestas augue, eu vulputate magna
                                    eros eu erat.
                                </p>
                                <p className="bigger">
                                    Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
                                    rutrum orci, sagittis tempus lacus enim ac dui.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="polaroidSlider pull-right">
                                    <img
                                        src="./src/assets/images/scotchtape.png"
                                        alt=" "
                                        className="scotchtape"
                                    />
                                    <div className="inner">
                                        {/* <ul className="bxslider">
                                            <li>
                                                <img
                                                    src="./src/assets/flavours/bigsmokebbq/images/content/smallslider-1.jpg"
                                                    alt=" "
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="./src/assets/flavours/bigsmokebbq/images/content/smallslider-1.jpg"
                                                    alt=" "
                                                />
                                            </li>
                                            <li>
                                                <img
                                                    src="./src/assets/flavours/bigsmokebbq/images/content/smallslider-1.jpg"
                                                    alt=" "
                                                />
                                            </li>
                                        </ul> */}
                                    </div>
                                </div>
                                {/* / polaroidSlider */}
                                {/* <div className="text-center">
                                    <a
                                        target="_blank"
                                        href="http://www.facebook.com/sharer/sharer.php?u=foodtruck.html.themeforest.createit.pl"
                                        className="shareit"
                                    >
                                        <i />
                                        Share it
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* / easyBox */}
                    <h3 className="hdr2">Do you like our story?</h3>
                    <h4 className="hdr3">
                        Please visit our <a href="#">facebook page</a> to know even more!
                    </h4>
                </div>
                {/* / container */}
            </div>
        </div>

    )
}