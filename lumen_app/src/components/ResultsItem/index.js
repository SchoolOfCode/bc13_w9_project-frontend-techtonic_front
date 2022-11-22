import React from "react";
import TextBox from "../TextBox";

function ResultsItem({ title, link, category, language, comment }) {
  return (
    <div>
      <TextBox className="results-item">
        <a href={link}>{title}</a>
      </TextBox>
      <TextBox>
        <p>{category}</p>
      </TextBox>
      <TextBox>
        <p>{language}</p>
      </TextBox>
      <TextBox>
        <p>{comment}</p>
      </TextBox>
    </div>
  );
}

export default ResultsItem;
