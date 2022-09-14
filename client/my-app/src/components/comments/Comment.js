import React from "react";
import { useContext, useEffect, useState } from "react";
//import { IoCaretUpSharp } from "react-icons/fa";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import "./Comments.css";
import { HiChevronUp } from "@heroicons/react/outline";

//import All from "./All";

export default function Comment({ comment }) {
  const [upvote, setUpvote] = useState(comment.upvotes.length);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(UserContext);
  const { isVoted, setIsVoted } = useState(false);

  useEffect(() => {
    setIsVoted(comment.upvotes.includes(currentUser._id));
  }, [currentUser._id, comment.upvotes, setIsVoted]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:4000/comments?userId=${comment.userId}`
      );
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
        <p className="text">${user.comment}</p>
      </div>
      <div onClick={commentUpvotes}>
        <HiChevronUp className="icon" />
        <p className="upvotes">upvotes</p>
      </div>
      <p className="reply">reply</p>
    </div>
  );
}
