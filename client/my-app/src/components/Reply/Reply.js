import React from "react";
import { useContext, useEffect, useState } from "react";
import { HiChevronUp } from "@heroicons/react/outline";

import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import "./Reply.css";

export default function Reply({ reply }) {
  const [upvote, setUpvote] = useState(reply.upvotes.length);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(UserContext);
  const { isVoted, setIsVoted } = useState(false);

  useEffect(() => {
    setIsVoted(reply.upvotes.includes(currentUser._id));
  }, [currentUser._id, reply.upvotes, setIsVoted]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:4000/replies?userId=${reply.userId}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [reply.userId]);

  const replyUpvotes = () => {
    try {
      axios.put("/replies/" + reply._id + "/upvotes", {
        userId: currentUser._id,
      });
    } catch (err) {
      setUpvote(isVoted ? upvote - 1 : upvote + 1);
      setIsVoted(!isVoted);
    }
  };

  return (
    <div className="reply">
      <div>
        <image className="proimg">{user.profile}</image>
      </div>
      <p className="username">{user.name}</p>
      <div>
        <p className="text">{user.reply}</p>
      </div>
      <div>
        <HiChevronUp className="icon" />
        <p className="upvotes">upvotes</p>
        <p className="reply" onClick={replyUpvotes}>
          reply
        </p>
      </div>
    </div>
  );
}
