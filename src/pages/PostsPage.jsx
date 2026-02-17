
import { useEffect, useState, useContext } from "react";
import { getPosts, deletePost, updatePost } from "../api";
import { AuthContext } from "../context/AuthContext";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null); 
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this post?")) {
      await deletePost(id);
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  
  const handleUpdate = async (id, updatedData) => {
    const response = await updatePost(id, updatedData);

    setPosts(posts.map(p => p.id === id ? response : p));
    setEditingPost(null); 
  };

  return (
    <div className="container">
      <h2>Posts</h2>

      {user && (
        <PostForm
          addNewPost={addNewPost}
          editingPost={editingPost}
          handleUpdate={handleUpdate}
        />
      )}

      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          isOwner={user?.id === post.userId}
          onDelete={handleDelete}
          onEdit={() => setEditingPost(post)} 
          
        />
      ))}
    </div>
  );
}

export default PostsPage;
