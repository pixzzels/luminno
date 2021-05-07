import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReview from '../AddReview';
import Button from '../Button';
import EditReviewForm from '../EditReviewForm';


function ReviewModal({ text = 'button', listingId, edit = false }) {
  const [showModal, setShowModal] = useState(false);

  let component;

  if (edit === false) {
    component =
      <AddReview listing_id={listingId} />
  } else if (edit === true) {
    component =
      <EditReviewForm listing_id={listingId} />
  }

  const onClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <Button onClick={onClick} text={text} />
      {showModal && (
        <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
          {component}
        </Modal>
      )}
    </>
  );
}

export default ReviewModal;