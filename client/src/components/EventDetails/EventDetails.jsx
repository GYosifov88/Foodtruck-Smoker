import { useContext, useEffect, useReducer, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";

import * as eventService from '../../services/eventService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import reducer from './commentReducer';
import useForm from '../../hooks/useForm';

import styles from './EventDetails.module.css';

export default function EventDetails() {
    const { email, userId, isAuthenticated } = useContext(AuthContext);
    const [event, setEvent] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { id } = useParams();

    useEffect(() => {
        eventService.getOne(id)
            .then(setEvent);

        commentService.getAll(id)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [id]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            id,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const initialValues = useMemo(() => ({
        comment: '',
    }), [])

    const { values, onChange, onSubmit } = useForm(addCommentHandler, initialValues);

    return (
        <div className="bg-1 section" id="events">
            <div
                className={`inner ${styles.eventBackground}`}
                data-topspace={50}
                data-image="./src/assets/flavours/bigsmokebbq/images/content/background-3.jpg"
            >
                <div className="container">
                    <h3 className="hdr4">{event.event}</h3>
                    <div className="eventBox">
                        <span className="date">
                            {event.month} <span>{event.date}</span>
                        </span>
                        <h4 className="hdr2">
                            {event.event}
                            <span className="place">{event.place}</span>
                            <span className="time">{event.time}</span>
                        </h4>
                        <hr />

                        <div className={`form-group ${styles.commentSection}`}>
                            <h2>Comments:</h2>
                            <ul>
                                {comments.map(({ _id, text, owner: { username } }) => (
                                    <li key={_id} className={styles.commentBox}>
                                        <p className={styles.commentParagraph}><strong>{username}:</strong> {text}</p>
                                    </li>
                                ))}
                            </ul>

                            {comments.length === 0 && (
                                <p className="no-comment">No comments! Be the first to comment.</p>
                            )}
                        </div>
                        <div className="clearfix" />
                        {isAuthenticated && (
                        <div className="form-group">
                            <article >
                                {/* <label >Add new comment:</label> */}
                                <form className="simpleForm" onSubmit={onSubmit} >
                                    <textarea className="form-control" value={values.comment} onChange={onChange} name="comment" placeholder="Comment......"></textarea>
                                    <input className="btn submit" type="submit" value="Add Comment" />
                                </form>
                            </article>
                            
                        </div>
                        )}
                        <Link to={'/events'}><button id="action-cancel" className="btn" type="button" >
                                Cancel
                            </button>
                            </Link>
                        
                    </div>

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