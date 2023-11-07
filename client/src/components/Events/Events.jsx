import styles from './Events.module.css'

export default function Events(){
    return(
        <div className="bg-1 section" id="events">
  <div
    className={`inner ${styles.eventsBackground}`}
    data-topspace={50}
    data-image="./src/assets/flavours/bigsmokebbq/images/content/background-3.jpg"
  >
    <div className="container">
      <h3 className="hdr4">Our upcoming events &amp; festivals</h3>
      <div className="eventBox">
        <span className="date">
          SEP <span>18</span>
        </span>
        <h4 className="hdr2">
          @ The BBQ Feast
          <span className="place">Chambers Street 1234, New York, NY</span>
          <span className="time">11:00 am - 1:00 pm</span>
        </h4>
        <hr />
        <div className="clearfix" />
        {/* go to http://amap.to/ and create your own map */}
        <a
          href="http://aMAP.to/qgmdrzv?iframe=true&width=500&height=350"
          data-rel="prettyPhoto"
          className="mapit"
        >
          <i />
          Map it
        </a>
        <a
          target="_blank"
          href="http://www.facebook.com/sharer/sharer.php?u=foodtruck.html.themeforest.createit.pl"
          className="shareit"
        >
          <i />
          Share it
        </a>
      </div>
      {/* / eventBox */}
      <div className="eventBox">
        <span className="date">
          SEP <span>31</span>
        </span>
        <h4 className="hdr2">
          @ The BBQ Palooza
          <span className="place">Atlantic Avenue 1234, New York, NY</span>
          <span className="time">1:00 pm - 6:00 pm</span>
        </h4>
        <hr />
        <div className="clearfix" />
        {/* go to http://amap.to/ and create your own map */}
        <a
          href="http://aMAP.to/wptpryc?iframe=true&width=500&height=350"
          data-rel="prettyPhoto"
          className="mapit"
        >
          <i />
          Map it
        </a>
        <a
          target="_blank"
          href="http://www.facebook.com/sharer/sharer.php?u=foodtruck.html.themeforest.createit.pl"
          className="shareit"
        >
          <i />
          Share it
        </a>
      </div>
      {/* / eventBox */}
      <h3 className="hdr2">Join us at our events</h3>
      <h4 className="hdr3">
        We would be more than glad, to see you at our events!
      </h4>
    </div>
    {/* / container */}
  </div>
</div>

    )
}