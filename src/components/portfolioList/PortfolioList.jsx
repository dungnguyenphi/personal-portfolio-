import React from "react";
import "./style.scss";

export const PortfolioList = ({ title, active, setSelected, id }) => {
  return (
    <li
      onClick={() => setSelected(id)}
      className={active ? "portfolioList active" : "portfolioList"}
    >
      {title}
    </li>
  );
};
