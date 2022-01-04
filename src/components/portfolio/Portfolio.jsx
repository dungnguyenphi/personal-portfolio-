import "./style.scss";
import { useState, useEffect } from "react";
import { PortfolioList } from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "ecommerce", title: "Ecommerce" },
    { id: "crypto", title: "Crypto" },
    { id: "social", title: "Social Media" },
    { id: "movies", title: "Movies" },
  ];
  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "ecommerce":
        setData(webPortfolio);
        break;
      case "crypto":
        setData(mobilePortfolio);
        break;
      case "social":
        setData(designPortfolio);
        break;
      case "movies":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((i) => (
          <PortfolioList
            title={i.title}
            active={selected === i.id}
            setSelected={setSelected}
            id={i.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
