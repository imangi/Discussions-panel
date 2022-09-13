import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

import "./Share.css";
import user from "../../../../src/models/user";

export default function Share() {
  const { user: currentUser } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const commentData = { comment, currentUser };

    const response = await axios.post("/api/comments" + user._id, {
      body: JSON.stringify(commentData),
      header: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(error);
    }
    if (response.ok) {
      setError(null);
      setComment("");
      console.log("new comment added", json);
    }
  };
  return (
    <div>
      <h1>Discussion</h1>
      <form className="create" onSumbit={handleSubmit}>
        <div>
          <image link="/" className="proimage">
            {user.profile}
          </image>
          <input
            type="text"
            class="textArea"
            onChange={(e) => {
              setComment(e.target.value);
            }}
            value={comment}
          />
        </div>
        <div>
          <button type="submit" className="shareButton">
            Comment
          </button>
        </div>
      </form>
    </div>
  );
}
