import { useState, useContext } from "react";
import { addComment } from "../api";

import { AuthContext } from "../context/AuthContext";

function CommentForm({ postId, addNewComment }) {
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");

  const handleSubmit = async () => {
    if (!user) {
      alert("Please login to comment");
      return;
    }

    const newComment = {
      postId,
      name: user.name,
      email: user.email,
      body: text
    };

    const response = await addComment(newComment);
    addNewComment(response);
    setText("");
  };

  return (
    <div className="card">
      <textarea
        placeholder="Add comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Comment</button>
    </div>
  );
}

export default CommentForm;
