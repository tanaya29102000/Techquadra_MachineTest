import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

function PostDetailsPage() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then(setComments);
  }, [id]);

  const addNewComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="container">
      <h2>Comments</h2>
      <CommentForm postId={id} addNewComment={addNewComment} />
      <CommentList comments={comments} />
    </div>
  );
}

export default PostDetailsPage;
