import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Comment from "../comments/Comment";
import Reply from "../Reply/Reply";

export default function All() {
  const { user, setUser } = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000");
      const json = await response.json();
      if (response.ok) {
        setUser(json);
      }
    };
    fetchData();
  });
  return (
    <div>
      {user &&
        user.map((user) => (
          <div key={user._id} user={user}>
            <Comment />
            <Reply />
          </div>
        ))}
    </div>
  );
}
