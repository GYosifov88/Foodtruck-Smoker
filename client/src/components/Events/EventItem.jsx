import { Link } from 'react-router-dom';

const EventItem = ({
  eventId,
  month,
  date,
  event,
  place,
  time,
  location,
}) => {

  
  return (
    <div className="eventBox">
      <span className="date">
        {month} <span>{date}</span>
      </span>
      <h4 className="hdr2">
        {event}
      </h4>
      <hr />
      <div className="clearfix" />         
      <button className="btn submit" type="submit" ><Link to={`/events/${eventId}`}>Details</Link></button>
    </div>
  )
}

export default EventItem