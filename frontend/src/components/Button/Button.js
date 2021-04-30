import './Button.css'

function Button({ text, onClick }) {

  return (
    <button className="btn-comp" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;