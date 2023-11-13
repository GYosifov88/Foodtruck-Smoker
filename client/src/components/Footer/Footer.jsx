export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Contact</h4>
                        <p>
                            Around Bulgaria
                            <br />
                            <br />
                            Varna and VT
                            <br />
                            <br />
                            0888 123 456
                            <br />
                            <br />
                            <a href="mailto:hello@bigsmoke.com">hello@bigsmoke.com</a>
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
                    <h4>Hours</h4>
                        <p>                            
                            Saturday &amp; Sunday
                            <br />
                            10:45 am - 5:00 pm
                            <br />
                            
                        </p>
                    </div>
                </div>
            </div>
            <a href="#" id="toTop" />
        </footer>
    )
}