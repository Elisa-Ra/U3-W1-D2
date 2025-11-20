// CommentArea dovrà fare la fetch delle recensioni per il libro selezionato, e salvare i commenti nel proprio stato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

import { Component } from "react"
import AddComment from "./AddComment"
import CommentsList from "./CommentsList"
import { Spinner } from "react-bootstrap"

class CommentArea extends Component {
  state = {
    commenti: [],
    loading: true,
    error: false,
  }

  getComments = () => {
    if (!this.props.asin) {
      console.warn("ASIN mancante, fetch annullata")
      return
    }

    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTBkYWUyNGY0YmQ0NzAwMTU4NWIxZDgiLCJpYXQiOjE3NjM2NDY1NjcsImV4cCI6MTc2NDg1NjE2N30.EkO-g4e99JbZJpCi-c_XZ-zKBeSI1cv8XnMwpyqWZ6A"
    const URL =
      "https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin
    fetch(URL, {
      headers: {
        Authorization: token,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("C'è qualcosa che non va: " + response.status)
        }
      })
      .then((arrayOfComment) => {
        this.setState({
          commenti: arrayOfComment,
          loading: false,
          error: false,
        })
      })
      .catch((err) => {
        console.log("Errore nella chiamata", err)
        this.setState({
          loading: false,
          error: true,
        })
      })
  }

  componentDidMount() {
    this.getComments()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      this.setState({ loading: true }, this.getComments)
    }
  }

  render() {
    const { commenti, loading, error } = this.state

    return (
      <div>
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="success" />
          </div>
        )}
        {error && <p>Errore nel caricamento dei commenti.</p>}
        {!loading && !error && commenti.length === 0 && (
          <p className="text-muted">
            Nessun commento disponibile per questo libro.
          </p>
        )}
        {!loading && !error && commenti.length > 0 && (
          <>
            {/* AGGIUNGO IL COMPONENT AddComment -> per scrivere i commenti */}
            <AddComment
              elementId={this.props.asin}
              onCommentAdded={this.getComments}
            />
            {/* AGGIUNGO IL COMPONENT CommentsList che contiene la lista dei commenti per quel libro */}
            <CommentsList commenti={commenti} />
          </>
        )}
      </div>
    )
  }
}

export default CommentArea
