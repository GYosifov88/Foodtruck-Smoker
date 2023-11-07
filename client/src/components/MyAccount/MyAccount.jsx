import styles from './MyAccount.module.css'

export default function MyAccount() {
    return (
        <div className="bg-2 section" id="contact">
            <div
                className={`inner ${styles.myAccountBackground}`}
                data-topspace={50}
                data-bottomspace={20}
                data-image="./src/assets/flavours/bigsmokebbq/images/content/background-6.jpg"
            >
                <div className="container">
                    <h3 className="hdr4">Drop us a line!</h3>
                    <div className="easyBox full">
                        <h4 className="hdr5">
                            <span>Did you know? We also provide super duper catering!</span>
                        </h4>
                        <div className="row nomargin">
                            <div className="col-md-5">
                                <h4 className="hdr2 special">Email Us</h4>
                                <form
                                    className="simpleForm"
                                    action="./src/assets/form/form.php"
                                    method="post"
                                >
                                    <fieldset>
                                        <div className="form-group">
                                            <label>Your name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="field_[]"
                                                placeholder="enter your name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>E-mail address</label>
                                            <input
                                                type="email"
                                                required=""
                                                className="form-control"
                                                name="email"
                                                placeholder="enter your e-mail address"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Your message</label>
                                            <textarea
                                                className="form-control"
                                                rows={5}
                                                name="field_[]"
                                                placeholder="type your message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="msg_subject"
                                            defaultValue="Contact Form"
                                        />
                                        <input type="hidden" name="field_[]" defaultValue=" " />
                                        <input
                                            className="btn btn-default"
                                            type="submit"
                                            defaultValue="Submit"
                                        />
                                    </fieldset>
                                </form>
                                <div className="successMsg" style={{ display: "none" }}>
                                    Message has been sent successfully!
                                </div>
                                <div className="errorMsg" style={{ display: "none" }}>
                                    An error occurred, please try again later.
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <h4 className="hdr2 special">Newsletter</h4>
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
                                    vitae, ultricies eget, tempor sit amet, ante.
                                </p>
                                <form
                                    className="newsletterForm simpleForm"
                                    action="./src/assets/form/form.php"
                                    method="post"
                                >
                                    <fieldset>
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                required=""
                                                placeholder="enter your e-mail address"
                                            />
                                        </div>
                                        <input
                                            type="hidden"
                                            name="msg_subject"
                                            defaultValue="New Newsletter subscription"
                                        />
                                        <input type="hidden" name="field_[]" defaultValue=" " />
                                        <input
                                            className="btn btn-default"
                                            type="submit"
                                            defaultValue="Submit"
                                        />
                                    </fieldset>
                                </form>
                                <div className="successMsg" style={{ display: "none" }}>
                                    Your e-mail has been added to our list!
                                </div>
                                <div className="errorMsg" style={{ display: "none" }}>
                                    Error, please try again later.
                                </div>
                                <div className="space50px" />
                                <p>Stop @ our Homebase and say hello!!!</p>
                                <div
                                    className="googleMap"
                                    data-location="Marine Ave. New York, NY"
                                    data-text="We are here!"
                                />
                            </div>
                        </div>
                    </div>
                    {/* / easyBox */}
                </div>
            </div>
        </div>

    )
}