const SingleComment = ({ comment }) => {
  return (
    <div>
      <strong>{comment.author}</strong>: {comment.comment} <br />
      <small>Voto: {comment.rate}/5</small>
    </div>
  )
}

export default SingleComment
