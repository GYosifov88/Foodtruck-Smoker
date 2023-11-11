const EventItem = ({
    eventId,
    month,
    date,
    event,
    place,
    time,
    location,
}) => {
    return(
        <div className="eventBox">
        <span className="date">
          {month} <span>{date}</span>
        </span>
        <h4 className="hdr2">
          {event}
          <span className="place">{place}</span>
          <span className="time">{time}</span>
        </h4>
        <hr />
        <div className="clearfix" />
        {/* go to http://amap.to/ and create your own map */}
        <span className="mapit">You can find us on these coordinates: {location}</span>
        
        <a
          target="_blank"
          href="http://www.facebook.com/sharer/sharer.php?u=foodtruck.html.themeforest.createit.pl"
          className="shareit"
        >
          <i />
          Share it
        </a>
      </div>
    )
}

export default EventItem