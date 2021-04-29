import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddReview from '../AddReview';
import Button from '../Button';
// function LoginForm() {
//   const [isRegister, setIsRegister] = useState(false);
//   const onClick = () => {
//     setIsRegister(!isRegister)
//   }

//   let component;
//   if(isRegister){
//     component = <SignupFormPage handleClick={onClick}/>
//   } else{
//     component = <LoginFormPage handleClick={onClick}/>
//   }

//   return (
//     component
//   );
// }



function ReviewModal({ text = 'button' }) {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => {
    setShowModal(true)
  }

  return (
    <>
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      <Button onClick={onClick} text={text} />
      {showModal && (
        <Modal className="login-register-modal" onClose={() => setShowModal(false)}>
          <AddReview />
        </Modal>
      )}
    </>
  );
}

export default ReviewModal;