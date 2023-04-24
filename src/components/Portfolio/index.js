import React from 'react';
import noteTakerImage from "../../assets/img/NoteTaker.png";


function Portfolio() {
  return (
<div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://cuddly-robot-note-taker.herokuapp.com/">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
                An application that provides the user the ability to add new
                notes, and to delete notes.{" "}
              </p>
            </div>
          </div>
        </div>

);
}

export default Portfolio;
