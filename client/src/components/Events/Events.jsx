import styles from './Events.module.css'
import { useState, useEffect } from "react";
import * as eventService from "../../services/eventService";
import EventItem from "./EventItem"


export default function Events(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
      eventService.getAll()
          .then(result => setEvents(result))
          .catch(err => console.log(err))
  }, []);


    return(
        <div className="bg-1 section" id="events">
  <div
    className={`inner ${styles.eventsBackground}`}
    data-topspace={50}
    data-image="./src/assets/flavours/bigsmokebbq/images/content/background-3.jpg"
  >
    <div className="container">
      <h3 className="hdr4">Our upcoming events &amp; festivals</h3>
      {events.map(event => (
        <EventItem
            key={event._id}
            eventId={event._id}
            month={event.month}
            date={event.date}
            event={event.event}
            place={event.place}
            time={event.time}
            location={event.location}
        />
      ))}

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