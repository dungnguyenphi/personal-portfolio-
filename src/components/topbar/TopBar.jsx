import "./style.scss";
import { Phone, Email } from "@material-ui/icons";

export const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`topbar${menuOpen ? " active" : ""}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Frontend Developer
          </a>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+84963247915</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>dungnguyenphi94@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
