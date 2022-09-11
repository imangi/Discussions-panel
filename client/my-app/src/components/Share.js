import React from "react";

import "./Share.css";

export default function Share() {
  return (
    <div>
      <h1>Discussion</h1>
      <form>
        <div>
          <image link="/" className="proimage"></image>
          <input type="text" class="textArea" />
        </div>
        <div>
          <button type="submit" className="shareButton">
            comment
          </button>
        </div>
      </form>
    </div>
  );
}
