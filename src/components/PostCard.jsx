
function PostCard({ post, isOwner, onDelete, onEdit }) {
  return (
    <div className="card">
      <h4>{post.title}</h4>
      <p>{post.body}</p>

      {isOwner && (
        <>
          <button onClick={onEdit}>Edit</button>
          
          <button
            className="danger"
            onClick={() => onDelete(post.id)}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default PostCard;
