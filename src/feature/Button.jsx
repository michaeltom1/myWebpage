import { Link } from "react-router-dom";
function Button({ text = "", linkTo = "", className="", target}) {

const handleClick = (e) => {
  e.preventDefault()
}
  return (
    <a href={linkTo} target={target} >
      <button
        className={`bg-btn py-3 px-5 rounded-lg text-center text-white font-medium ${className}`}
      >
        {text}
      </button>
    </a>
  );
}

export default Button;