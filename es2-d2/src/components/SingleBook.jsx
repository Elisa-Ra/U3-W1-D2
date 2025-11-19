// Crea un componente SingleBook utilizzando una funzione. Questo componente dovrà essere predisposto per ricevere nelle props un oggetto corrispondente ad un singolo libro, e visualizzerà la sua copertina e il titolo. Usa le Card di react-bootstrap (se vuoi testarlo, l'oggetto del libro può esser preso da uno dei file .json  che hai ricevuto ieri).

import { Component } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { CardSubtitle } from "react-bootstrap"

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
  }

  render() {
    const { book } = this.props
    const { selected } = this.state

    return (
      <Card
        style={{
          border: selected ? "3px solid red" : "1px solid lightgray",
        }}
      >
        <Card.Img
          className="object-fit-contain"
          variant="top"
          src={book.img}
          alt={book.title}
          style={{ height: "200px", cursor: "pointer" }}
          onClick={this.bookSelected}
        />
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
    )
  }
}

export default SingleBook
