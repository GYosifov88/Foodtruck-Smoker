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
                                    On all kind of gatherings we have been always the people that will take care of the meat
                                    and the grill in general. Grilling the meat and vegetables whole afternoon and sometimes half the evening.
                                    Seem like we loved the smoke of grilled meat, the charcoals and on first place the feeling of seeing 
                                    other people enjoy what you have done.
                        
                             
                                </p>
                                <p className="bigger">
                                    Then started to watch different channels on youtube and television. Upgraded the simple grill with one 
                                    that you can close the lid so you can bring more smokey flavour. And from here all the experimenting began.
                                    Tried different meats, different marinates, different spices and wood chips.
                                </p>
                                <p className="bigger">
                                    One thing led to another and loving to smoke meat and meet different people, the obvious next step was 
                                    to get a mobile smoker with which we can travel around the country, visit different festivals and show 
                                    everyone what we offer.
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
                                        <ul className="bxslider">
                                            <li>
                                                <img
                                                    src="../src/assets/food_images/Meats_Pig_Roaster_PR60T_13.jpg"
                                                    alt=" "
                                                />
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </div>                                
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