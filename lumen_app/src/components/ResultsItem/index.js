import React from "react";
import RatingInput from "../Rating";

function ResultsItem({ results }) {
  return (
    <div className="results-item">
      <table className="results-table">
        <tr className="table-headers">
          <th>Title</th>
          <th>Category</th>
          <th>Language</th>
          <th>Comment</th>
          <th>Date</th>
          <th>Rating</th>
        </tr>
        {results.map((eachItem, key) => {
          return (
            <tr key={key}>
              <td>
                <a href={eachItem.url}>{eachItem.title}</a>
              </td>
              <td>{eachItem.category}</td>
              <td>{eachItem.language}</td>
              <td>{eachItem.submission_notes}</td>
              <td>{eachItem.date.substring(0, 10)}</td>
              <RatingInput />
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ResultsItem;
