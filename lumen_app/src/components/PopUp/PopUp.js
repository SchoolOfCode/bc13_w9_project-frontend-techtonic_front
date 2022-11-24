import React from "react";
import "./PopUp.css";
import { useState, useEffect } from "react";
import WebFont from "webfontloader";

function PopUp(props) {
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [url, setUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [description, setDescription] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Big Shoulders Display", "Open Sans"],
      },
    });
  }, []);

  async function postResource() {
    try {
      const response = await fetch("http://localhost:3001/api/v2/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify({
          title: title,
          url: url,
          language: language,
          category_id: topic,
          submission_notes: description,
        }),
      });

      if (response.status === 200) {
        console.log("Resource added successfully");
      } else {
        console.log("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    postResource();
    setSubmit(true);
    setDescription("");
    setLanguage("");
    setTitle("");
    setUrl("");
    setTopic("");
  }

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="popup-btn" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {submit === true && (
          <p id="success-message">
            You have successfully added a resource.
            <br></br>
            How about another one?
          </p>
        )}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Title</label>

            <div className="details_form">
              <input
              className="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <br></br>
              <br></br>

              <label> URL </label>
              <input
                className="URL"
                type="text"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <br></br>
              <br></br>
              <label>Language</label>
              <select
                className="language"
                id="languages"
                name="languages"
                required
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="JavaScript">Javascript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="SQL">SQL</option>
                <option value="ReactJS">ReactJS</option>
                <option value="NodeJS">NodeJS</option>
                <option value="N/A">n/a</option>
                <option value="Other">Other</option>
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
                id = "description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <button className="popup-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
