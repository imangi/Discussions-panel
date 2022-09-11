import React from "react";
import { useContext, useState, useEffect } from "react";
import { IoCaretUpSharp } from "react-icons/fa";
import { AuthContext } from "../data/AuthContext";
import axios from "axios";
import "Comments.css";

export default function Comment() {
  const [isVoted, setIsVoted] = useState(false);
  const [upvote, setUpvote] = useState(comment.upvotes.length);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(comment.upvotes.includes(currentUser._id));
  }, [currentUser._id, comment.upvotes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${comment.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [comment.userId]);

  const commentUpvotes = () => {
    try {
      axios.put("/comment/" + Comment._id + "/upvotes", {
        userId: currentUser._id,
      });
    } catch (err) {
      setUpvote(isVoted ? upvote - 1 : upvote + 1);
      setIsVoted(!isVoted);
    }
  };

  return (
    <div className="comment">
      <div>
        <image className="proimg">${user.profile}</image>
      </div>
      <p className="username">${user.name}</p>
      <div>
        <p className="text">${comment}</p>
      </div>
      <div>
        <div onClick={commentUpvotes}>
          <IoCaretUpSharp className="icon" />
          <p className="upvotes">upvotes</p>
        </div>
        <p className="reply">reply</p>
      </div>
    </div>
  );
}
