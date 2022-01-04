import "./style.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      strings: ["ReactJS Developer", "UI/UX Designer"],
      backDelay: 1500,
      showCursor: true,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/man.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Dũng Nguyễn</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};
