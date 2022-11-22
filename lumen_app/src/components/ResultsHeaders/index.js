import React from "react";
import TextBox from "../TextBox";

function ResultsHeaders() {
  return (
    <div className="results-list-headings">
      <TextBox className="list-headings" text="Title" />
      <TextBox className="list-headings" text="Category" />
      <TextBox className="list-headings" text="Language" />
      <TextBox className="list-headings" text="Comment" />
    </div>
  );
}

export default ResultsHeaders;
