export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Contact</h4>
                        <p>
                            Atlantic Avenue 1234,
                            <br />
                            <br />
                            New York, NY
                            <br />
                            <br />
                            123 - 456 - 7891
                            <br />
                            <br />
                            <a href="mailto:hello@bigsmoke.com">hello@bigsmoke.com</a>
                        </p>
                        <hr />
                        <h4>Hours</h4>
                        <p>
                            Monday - Friday
                            <br />
                            11:00 am - 11:00 pm
                            <br />
                            <br />
                            Saturday &amp; Sunday
                            <br />
                            10:45 am - 5:00 pm
                            <br />
                            <br />
                            Saturday &amp; Sunday
                            <br />
                            10:45 am - 5:00 pm
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img
                            src="./src/assets/flavours/bigsmokebbq/images/content/logo-inline.png"
                            alt=" "
                        />
                        <div
                            className="googleMap"
                            data-location="Marine Ave. New York, NY"
                            data-text="We are here!"
                        />
                        <ul className="bigSocials">
                            <li className="fb">
                                <a href="#">
                                    <img src="./src/assets/images/social-fb.png" alt="Facebook" />
                                </a>
                            </li>
                            <li className="tw">
                                <a href="#">
                                    <img src="./src/assets/images/social-tw.png" alt="Twitter" />
                                </a>
                            </li>
                            <li className="gg">
                                <a href="#">
                                    <img src="./src/assets/images/social-gg.png" alt="Google+" />
                                </a>
                            </li>
                            <li className="rss">
                                <a href="#">
                                    <img src="./src/assets/images/social-rss.png" alt="RSS" />
                                </a>
                            </li>
                        </ul>
                        <p className="copyright">
                            © Copyright 2014 <a href="#">TemplateRockers</a>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h4>Latest Tweets</h4>
                        <div className="tweets">
                            <div style={{ display: "none" }}>
                                here will be displayed live tweets, configuration is placed in
                                /twitter/config.php
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" id="toTop" />
        </footer>
    )
}