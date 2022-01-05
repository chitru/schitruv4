import React, { useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Slider from "./components/slider/slider";

function Work() {
  const [toggleState, setToggleState] = useState(1);

  const handleClick = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <Header />
      <main className="main work">
        <div className="tab-title">
          <ul>
            <li
              className={ toggleState === 1 ? "active-tab" : "" }
              onClick={() => {
                handleClick(1);
              }}
            >
              UI/UX Design
            </li>
            <li
                className={toggleState === 2 ? "active-tab" : ""}
              onClick={() => {
                handleClick(2);
              }}
            >
              Graphics Design
            </li>
            <li
                className={toggleState === 3 ? "active-tab" : ""}
              onClick={() => {
                handleClick(3);
              }}
            >
              Brochure
            </li>
          </ul>
        </div>
        <div className="tab-content">
          <div 
            className={ toggleState === 1 ? "active-content" : "content"}
           >
                 <Slider />
        </div>
        <div 
            className={ toggleState === 2 ? "active-content" : "content"}
           >
                 Graphics Design
        </div>
        <div 
            className={ toggleState === 3 ? "active-content" : "content"}
           >
                 Brochure
        </div>        
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
