
import { useState, useEffect } from "react";
import { createPost } from "../api";

function PostForm({ addNewPost, editingPost, handleUpdate }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    }
  }, [editingPost]);

  const handleSubmit = async () => {
    if (!title || !body) return alert("Fill all fields");

    const postData = {
      title,
      body,
      userId: 1
    };

    if (editingPost) {
      
      handleUpdate(editingPost.id, postData);
    } else {
      
      const response = await createPost(postData);
      addNewPost(response);
    }

    setTitle("");
    setBody("");
  };

  return (
    <div className="card">
      <h3>{editingPost ? "Update Post" : "Add Post"}</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editingPost ? "Update Post" : "Add Post"}
      </button>
    </div>
  );
}

export default PostForm;
