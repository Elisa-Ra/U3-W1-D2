// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

import { Container, Row, Col } from "react-bootstrap"

import SingleBook from "./SingleBook"

function BookList({ books }) {
  return (
    <Container>
      <h1 className="text-center my-3">Consigli Fantasy!</h1>
      <Row className="d-flex flex-row justify-content-center justify-content-between">
        {/* {this.props.books.filter((b) =>
          b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        )} */}
        {books.map((onebook) => (
          <Col xs={12} sm={6} md={4} lg={3} key={onebook.asin} className="mb-4">
            <SingleBook book={onebook} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
