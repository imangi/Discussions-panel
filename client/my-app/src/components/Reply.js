import React from "react";
import { IoCaretUpSharp } from "react-icons/fa";
import "Comments.css";

export default function Comment() {
  return (
    <div className="reply">
      <div>
        <image className="proimg"></image>
      </div>
      <p className="username">username</p>
      <div>
        <p className="text">comment</p>
      </div>
      <div>
        <IoCaretUpSharp className="icon" />
        <p className="upvotes">upvotes</p>
        <p className="reply">reply</p>
      </div>
    </div>
  );
}
