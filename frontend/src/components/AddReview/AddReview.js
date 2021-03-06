import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { createReview } from '../../store/reviews'

import './AddReview.css'


const AddReview = ({ listing_id }) => {

  const dispatch = useDispatch();
  const user_id = useSelector(state => state.session.user.id);
  const [description, setDescription] = useState('')
  const [score, setScore] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (score.isNaN) setErrors(...errors, "Please Select a Score")
    if (description.length === '') setErrors(...errors, "Please add a description")
    if (description.length < 5) setErrors(...errors, 'Please enter a description more than 5 characters')
    setErrors([]);
    return dispatch(createReview({ description, score, user_id, listing_id }))
  }
  return (
    <section className="reviewForm-container">
      <form className="reviewForm" onSubmit={handleSubmit}>
        <h1>Leave Us A Review!</h1>
        <ul className='errors-list'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label htmlFor="score">Select your star rating!</label>
        <select name="score" value={score} className="rating-select"
          onChange={e => setScore(e.target.value)}>
          <option>Give A Rating</option>
          <option value={5}>5 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={2}>2 Stars</option>
          <option value={1}>1 Star</option>

        </select>
        <label htmlFor="description">Description</label>
        <textarea
          className="review-description-input"
          name="description"
          type="text"
          placeholder="Your review in here"
          value={description}
          onChange={e => setDescription(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default AddReview;