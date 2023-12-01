import { Link } from 'react-router-dom';
import Path from '../../paths';

const EventItem = ({
  eventId,
  month,
  date,
  event,
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
      <button className="btn submit" type="submit" ><Link to={`${Path.Events}/${eventId}`}>Details</Link></button>
    </div>
  )
}

export default EventItem