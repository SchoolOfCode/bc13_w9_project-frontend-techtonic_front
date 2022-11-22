import React from "react";
import RatingInput from "../Rating";
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
      <RatingInput/>
    </div>
  );
}

export default ResultsItem;
