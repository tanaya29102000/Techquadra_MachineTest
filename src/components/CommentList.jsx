function CommentList({ comments }) {
  return (
    <>
      {comments.map(comment => (
        <div key={comment.id} className="card">
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
}

export default CommentList;
