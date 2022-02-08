import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";
import "./Widgets.css";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("2022 - the year of revenge hiring", "7,062 readers")}
      {newsArticle("COVID 19 - Outbreak", "5,054 readers")}
      {newsArticle("TCS, Infosys, Wipro - mass hiring", "2,464 readers")}
    </div>
  );
}

export default Widgets;
