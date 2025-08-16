import { Link } from "react-router-dom";
function Button({
  text = "",
  linkTo = "",
  className = "",
  target,
  padding = "py-3 px-6",
}) {
  return (
    <a
      href={linkTo}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      <button
        className={`bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 ${padding} rounded-xl text-center text-white font-bold shadow-lg transition-transform duration-200 hover:scale-105 ${className}`}
      >
        {text}
      </button>
    </a>
  );
}

export default Button;
