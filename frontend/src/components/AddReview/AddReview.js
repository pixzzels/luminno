import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import './AddReview.css'


const AddReview = () => {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [description, setDescription] = useState('')
  const [score, setScore] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return
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
        <label>Select your star rating!</label>
        <select className="rating-select">
          <option>5 Stars</option>
          <option>2 Stars</option>
          <option>4 Stars</option>
          <option>3 Stars</option>
          <option>1 Star</option>

        </select>
        <label forHtml="description">Description</label>
        <textarea
          className="review-description"
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