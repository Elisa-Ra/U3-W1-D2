// Crea un componente BookList. Questo componente riceverà dalle prop un array di libri, e li visualizzerà attraverso un .map() ritornando per ogni elemento il componente SingleBook. Successivamente monta BookList dentro il componente App, e forniscigli una lista di libri da uno dei file .json come prop. Dovresti ottenere a schermo un risultato simile al componente AllTheBooks: ora però la struttura è molto più modulare e riutilizzabile.

// 24/11/25 Fai un refactor della struttura del tuo componente BookList: dovranno esserci due colonne. Una a sinistra contenente la griglia con i libri e una sulla destra con il componente CommentArea. Entrambi dovranno essere sempre visibili. Se inizialmente nessun libro è selezionato, il CommentArea non deve mostrare alcun contenuto, oppure mostrare un avviso. CommentArea va poi RIMOSSO da ogni SingleBook.
import { Container, Row, Col } from "react-bootstrap"
import CommentArea from "./CommentArea"
import SingleBook from "./SingleBook"
import { useState } from "react"

function BookList({ books, changeAppState }) {
  const [selectedBook, setSelectedBook] = useState(null)

  return (
    <Container fluid>
      <h1 className="text-center my-3">Consigli Fantasy!</h1>
      <Row className="d-flex flex-row justify-content-center justify-content-between">
        {/* {this.props.books.filter((b) =>
          b.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        )} */}
        <Col md={8}>
          <Row>
            {books.map((onebook) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={onebook.asin}
                className="mb-4"
              >
                <SingleBook
                  book={onebook}
                  onBookSelect={() => setSelectedBook(onebook)}
                  onClick={() => changeAppState(onebook.asin)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {/* Colonna destra: CommentArea */}
        <Col md={4}>
          {selectedBook ? (
            <CommentArea asin={selectedBook.asin} />
          ) : (
            <p className="text-muted">
              Seleziona un libro per vedere i commenti!
            </p>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default BookList
