import  { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      // strings: ["Hello, world!", "Welcome to Typed.js in React!"],
      // strings: ["WEB DEVELOPER AND GRAPHIC DESIGNER"],
      strings: ["FRONTEND WEB DEVELOPER"," GRAPHIC DESIGNER"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    // Clean up function to destroy Typed instance when component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <span ref={typedTextRef}></span>;
};

export default TypedComponent;
