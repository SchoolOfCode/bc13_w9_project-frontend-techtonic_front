import React from "react";
import TextBox from "../TextBox";

function ResultsList(props){
    return <div className="results-list-headings">
                <TextBox className= "list-headings"><h1>Title</h1></TextBox >
                <TextBox className= "list-headings"><h1>Category</h1></TextBox>
                <TextBox className= "list-headings"><h1>Language</h1></TextBox>
                <TextBox className= "list-headings"><h1>Comment</h1></TextBox>
            </div>
            
        
}

export default ResultsList;