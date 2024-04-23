import { Component } from "react";

const hello = () => {
  alert("Hello there")
  const greet = "Hello There";
  
}

class Index extends Component {
  state = { clicked: false };
  handelClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  
  render() {
    return (
      <>
        <nav className="flex items-center  bg-[#041644] p-2 justify-between shadow-sm px-4 sm:px-16 w-[100%] bg-fixed fixed top-0 ">
          <div>
            <button className="p-[0.6em]" onClick={hello}>
              <a href="#">Michael</a>
            </button>
          </div>

          <div>
            <div className="">
              <ul
                id="nav-side"
                className={
                  this.state.clicked ? "#nav-side " : "nav-side active"
     
                }
                
              >
                <li className="mb-[25px]">
                  <a href="#">HOME</a>
                </li>
                <li className="mb-[25px]">
                  <a href="#about">ABOUT ME</a>
                </li>
                <li className="mb-[25px]">
                  <a href="#projects">PROJECTS</a>
                </li>
                <li className="mb-[25px]">
                  <a href="#testimonials">TESTIMONIALS</a>
                </li>
                <li className="mb-[25px]">
                  <a href="#contact">CONTACTS</a>
                </li>
              </ul>
            </div>
          </div>

          {/* big */}
          <ul className="gap-5 md:hover:p-1 hidden lg:flex ">
            <li className="md:hover:bg-blue-400 ">
              <a href="#">HOME</a>
            </li>
            <li className="md:hover:bg-blue-400 ">
              <a href="#about">ABOUT ME</a>
            </li>
            <li className="md:hover:bg-blue-400 ">
              <a href="#projects">PROJECTS</a>
            </li>
            <li className="md:hover:bg-blue-400 ">
              <a href="#testimonials">TESTIMONIALS</a>
            </li>
            <li className="md:hover:bg-blue-400 ">
              <a href="#contact">CONTACTS</a>
            </li>
          </ul>

          <button className="button p-0 li md:hidden leading-[8px] text-[20px] text-center grid place-content-center bg-inherit "></button>
          <button className="button p-0 li lg:hidden leading-[8px] text-[20px] text-center grid place-content-center bg-inherit ">
            <div id="mobile" onClick={this.handelClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </button>
        </nav>
      </>
    );
  }
}

export default Index;
