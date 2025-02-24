import NoteComments from '../NoteComments/NoteComments'
import './NoteCommentForm.scss'
import React, { useState } from 'react'
import axios from 'axios';

function NoteCommentForm({ noteid }) {
  const [comment, setComment] = useState("");
  const [category, setCategory] = useState("success");
  const [errors, setErrors] = useState({ comment: false, category: false });
  const [refreshKey, setRefreshKey] = useState(0);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasError = false;

    if (comment.trim() === "") {
      setErrors(prev => ({ ...prev, comment: true }));
      hasError = true;
    } else {
      setErrors(prev => ({ ...prev, comment: false }));
    }

    if (!category) {
      setErrors(prev => ({ ...prev, category: true }));
      hasError = true;
    } else {
      setErrors(prev => ({ ...prev, category: false }));
    }

    if (hasError) return;

    const newComment = {
      user_id: 1,
      comment: comment,
      category: category
    };

    try {
      await axios.post(`${baseUrl}/notes/${noteid}/comments`, newComment);
      setComment("");
      setRefreshKey(prev => prev + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='comment-container'>
      <NoteComments noteid={noteid} key={refreshKey} />
      <form className='comment-form' onSubmit={handleSubmit}>
        <label className={`comment-form__label ${errors.comment && "comment-form__label--error"}`}>
          Add New Rolling Note: {errors.comment && " *field required"}
          <textarea
            className={`comment-form__field comment-form__field--comment ${errors.comment ? 'comment-form__field--error' : ''}`}
            value={comment}
            onChange={handleChangeComment}
          />
        </label>

        <fieldset className="comment-form__fieldset">
          <legend>Select Category</legend>
          <label className={`comment-form__label ${errors.category && "comment-form__label--error"}`}>
            <input
              type="radio"
              name="category"
              value="success"
              checked={category === "success"}
              onChange={handleChangeCategory}
            />
            Success
          </label>
          <label className={`comment-form__label ${errors.category && "comment-form__label--error"}`}>
            <input
              type="radio"
              name="category"
              value="struggles"
              checked={category === "struggles"}
              onChange={handleChangeCategory}
            />
            Struggles
          </label>
          <label className={`comment-form__label ${errors.category && "comment-form__label--error"}`}>
            <input
              type="radio"
              name="category"
              value="adjustment"
              checked={category === "adjustment"}
              onChange={handleChangeCategory}
            />
            Adjustment
          </label>
          {errors.category && <span className="error-message">*A category must be selected</span>}
        </fieldset>

        <button className="comment-form__submit" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NoteCommentForm;
