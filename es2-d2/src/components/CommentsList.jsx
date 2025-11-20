// CommentsList mostrerà le recensioni del libro in un elenco; l'array di recensioni gli verrà passato come prop dal componente CommentArea. La singola recensione verrà visualizzata utilizzando un altro componente, chiamato SingleComment.

import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentsList = ({ commenti }) => {
  return (
    <ListGroup>
      {commenti.map((c) => (
        <ListGroup.Item key={c._id}>
          <SingleComment comment={c} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default CommentsList
