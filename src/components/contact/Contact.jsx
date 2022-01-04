import "./style.scss";
import { useState } from "react";

export const Contact = () => {
  const [showMessage, setShowMessage] = useState();
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowMessage(true);
          }}
        >
          <input type="text" placeholder="Email" />
          <textarea
            name=""
            placeholder="Message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
          {showMessage && <span>Thanks, I'll repy ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};
