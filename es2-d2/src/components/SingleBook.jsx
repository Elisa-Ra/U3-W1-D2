// Crea un componente SingleBook utilizzando una funzione. Questo componente dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).

import { Component } from "react"
import { CardSubtitle, Container, Card, Button } from "react-bootstrap"
import CommentArea from "./CommentArea"

// function SingleBook({ book }) {
//   return (
//     <Card style={{ width: "300px", height: "400px" }}>
//       <Card.Img
//         className="object-fit-contain"
//         variant="top"
//         src={book.img}
//         alt={book.title}
//         style={{ height: "200px" }}
//       />
//       <Card.Body className="d-flex flex-column justify-content-between">
//         <Card.Title className="flex-1 card-title ">{book.title}</Card.Title>
//         <Card.Text>Prezzo: {book.price}&euro;</Card.Text>
//         <CardSubtitle className="bg-warning w-50 text-center mx-auto">
//           {book.category}
//         </CardSubtitle>
//       </Card.Body>

//       <Button className="flex-1" variant="primary">
//         Compra
//       </Button>
//     </Card>
//   )
// }

// Converti il tuo componente SingleBook in una classe, e crea il suo stato contenente una proprietà booleana selected.
// Un click sulla copertina del libro dovrà fare il toggle della proprietà selected. Se la proprietà selected sarà true, il SingleBook dovrà ricevere dello stile che rifletta il cambio di stato, visivamente (potresti ad esempio utilizzare un bordo rosso).

class SingleBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  bookSelected = () => {
    this.setState((beforeState) => ({
      selected: !beforeState.selected,
    }))
    // Questo dice al parent quale libro è stato selezionato
    this.props.onBookSelect(this.props.book)
  }

  render() {
    // sarebbe il corrispettivo di const book = this.props.book
    const { book } = this.props
    const { selected } = this.state

    return (
      <>
        <Card
          style={{
            // se lo stato della carta è selected, fa apparire il bordo rosso, altrimenti quello standard grigio
            border: selected ? "3px solid red" : "1px solid lightgray",
            cursor: "pointer",
          }}
        >
          <Card.Img
            className="object-fit-contain"
            variant="top"
            src={book.img}
            alt={book.title}
            style={{ height: "200px", cursor: "pointer" }}
            // Quando si preme l'img parte la funzione che assegna/rimuove lo stato di selected
            onClick={this.bookSelected}
          />
          {/* CARD DEI SINGOLI LIBRI */}
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="flex-1 card-title">{book.title}</Card.Title>
            <Card.Text>Prezzo: {book.price}&euro;</Card.Text>
            <CardSubtitle className="bg-warning w-50 text-center mx-auto">
              {book.category}
            </CardSubtitle>
            <Button className="flex-1 mt-2" variant="primary">
              Compra
            </Button>
          </Card.Body>
        </Card>
        {/* QUESTO VENIVA USATO IN UN PRECEDENTE ESERCIZIO, ORA NON SERVE */}
        {/* QUESTO CONTAINER APPARE QUANDO LA CARD HA LO STATO DI SELECTED E FA APPARIRE IL COMPONENT CommentArea */}
        {/* <Container className=" p-0"> */}
        {/* Short circuit, corrisponde a {selected ? <CommentArea /> : null} quindi se selected è true, fa apparire CommentArea*/}
        {/* {selected && <CommentArea asin={book.asin} />} */}
        {/* </Container> */}
      </>
    )
  }
}

export default SingleBook
