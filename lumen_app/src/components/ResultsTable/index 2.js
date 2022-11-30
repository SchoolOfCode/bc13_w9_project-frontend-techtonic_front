import React from "react";
import RatingInput from "../Rating";

function ResultsTable({ results, headers }) {
  return (
    <div className="results-item">
      <table className="results-table">
        <tr className="table-headers">
          {headers.map((header, key) => {
            return <th key={key}>{header}</th>;
          })}
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

export default ResultsTable;
