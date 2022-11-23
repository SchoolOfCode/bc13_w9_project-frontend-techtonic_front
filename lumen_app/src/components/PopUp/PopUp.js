import React from "react";
import "./PopUp.css";
import { useState } from "react";

function PopUp(props) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [url, setUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const addResources = { title, topic, url, description, language };
    console.log(addResources);
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}

        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Title</label>

            <div className="details_form">
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br></br>
              <br></br>

              <label> URL </label>
              <input
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <br></br>
              <br></br>
              <label>Language</label>
              <select
                id="languages"
                name="languages"
                required
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="javascript">Javascript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="sql">SQL</option>
                <option value="reactjs">ReactJs</option>
                <option value="nodejs">NodeJs</option>
              </select>
              <br></br>
              <br></br>
              <label> Category </label>
              <select
                id="category"
                name="category"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value={1}>Game</option>
                <option value={2}>Workshop</option>
                <option value={3}>Video</option>
                <option value={4}>Blog/Forum</option>
                <option value={5}>Eli5</option>
                <option value={6}>Offical Docs</option>
                <option value={7}>Other</option>
              </select>
              <br></br>
              <br></br>
              <label>Description</label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button id="close-btn">Submit</button>
            {props.children}
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
