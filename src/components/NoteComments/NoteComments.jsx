import './NoteComments.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { formatDate } from '../../utils/utils';

function NoteComments({noteid}) {
    const [comments, setComments] = useState([]);
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const getComments = async () => {
        try {
            const response = await axios.get(`${baseUrl}/notes/${noteid}/comments`);
            setComments(response.data);
        } catch (error) {
            console.error(error);
        }
    }

  useEffect(() => {
    getComments();
  }, []);

  return (
    <section className="comments">
      <h4 className="comments__count">
        {`${comments.length} ${comments.length === 1 ? "Rolling Note" : "Rolling Notes"}`}
      </h4>
      {comments.map((comment) => (
        <div className="comment" key={comment.comment_id}>
          <div className="comment__toprow">
            <span className="comment__info">{comment.username}</span>
            <span className="comment__info">{formatDate(comment.created_at)}</span>
            <span className="comment__info">{comment.category}</span>
          </div>
          <span className="comment__comment">{comment.comment}</span>
        </div>
      ))}
    </section>

  )
}

export default NoteComments
