import React from "react";
import RatingInput from "../Rating";
import { v4 as uuidv4 } from "uuid";

/** This is a reusable table component.
 *
 * @param {Array} results - This is an array of resources that are fetched from the database. (See AddAndSearchDisplay Ln - 30)
 *
 * @param {Array} headers - This is an array of column headers (See AddAndSearchDisplay Ln - 79)
 *
 * @returns A table component that is populated with results content, with column headers.
 */
function ResultsTable({ results, headers }) {
  return (
    <div className="results-item">
      <table className="results-table">
        <tr className="table-headers">
          {headers.map((header) => {
            return <th key={uuidv4()}>{header}</th>;
          })}
        </tr>
        {results.map((eachItem) => {
          return (
            <tr key={uuidv4()}>
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
