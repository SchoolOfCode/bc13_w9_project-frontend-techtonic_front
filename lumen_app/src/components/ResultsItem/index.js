import React from "react";
import RatingInput from "../Rating";
import TextBox from "../TextBox";

function ResultsItem({ title, link, category, language, comment, date }) {
  return (
    <div className="results-item">
      <TextBox>
        <a id="resource-link" href={link}>{title}</a>
      </TextBox>
      <TextBox>
        <p id="resource-category">{category}</p>
      </TextBox>
      <TextBox>
        <p id="resource-language">{language}</p>
      </TextBox>
      <TextBox>
        <p id="resource-comment">{comment}</p>
      </TextBox>
      <TextBox>
        <p id="resource-date">{date}</p>
      </TextBox>
      <RatingInput />
    </div>
  );
}

export default ResultsItem;
