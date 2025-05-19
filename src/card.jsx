import React from "react";
import "./card.css"

const Card = ({ title, desc, languages, onClick }) => {
  return (
    <div className="c" onClick={onClick}>
      <h3 className="t">{title}</h3>
      <p className="d">{desc}</p>
      <div className="l">
        {languages.map(({ name, color }, i) => (
          <span key={i} className="lang">
            <span
              className="dot"
              style={{ backgroundColor: color }}
            ></span>{" "}
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;