import { Component } from "react"
import { Form, Button, Alert } from "react-bootstrap"

// inizializzo gli stati. I commenti sono vuoti, il rating è 1
class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    success: false,
    error: false,
  }

  // prevengo il comportamento di default del form, cioè il refresh della pagina
  handleSubmit = (e) => {
    e.preventDefault()

    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWUyNGY0YmQ0NzAwMTU4NWIxZDgiLCJpYXQiOjE3NjM2NDY1NjcsImV4cCI6MTc2NDg1NjE2N30.EkO-g4e99JbZJpCi-c_XZ-zKBeSI1cv8XnMwpyqWZ6A"

    const URL = "https://striveschool-api.herokuapp.com/api/comments/"

    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      //   elementId è l'ASIN del libro che passo come prop in CommentArea.jsx
      elementId: this.props.elementId,
    }

    fetch(URL, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      //se la risposta al POST ha successo, pulisco il form
      .then((response) => {
        if (response.ok) {
          this.setState({
            comment: "",
            rate: "1",
            success: true,
            error: false,
          })
          this.props.onCommentAdded() // aggiorna la lista
        } else {
          throw new Error("Errore nell'invio")
        }
      })
      // Se c'è un errore mostro il messaggio di errore, aggiornando lo state errorS
      .catch((err) => {
        console.log("Errore:", err)
        this.setState({ success: false, error: true })
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mb-3">
        <Form.Group className="mb-2">
          <Form.Label>Scrivi un commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.comment}
            // dopo ogni cambiamento, aggiorno/setto lo stato
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Seleziona il voto</Form.Label>
          {/* Anche qui dopo ogni cambiamento, setto lo stato */}
          <Form.Select
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" variant="success">
          Invia commento
        </Button>
        {/* Gestione degli stati di success ed error, faccio apparire degli alert */}
        {this.state.success && (
          <Alert variant="success" className="mt-2">
            Commento aggiunto!
          </Alert>
        )}
        {this.state.error && (
          <Alert variant="danger" className="mt-2">
            Errore nell'invio del commento.
          </Alert>
        )}
      </Form>
    )
  }
}

export default AddComment
