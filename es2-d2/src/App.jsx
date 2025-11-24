import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import Container from "react-bootstrap/Container"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
// import Books from "./components/AllTheBooks"
import { Component } from "react"
import BookList from "./components/BookList"
import fantasyBooks from "./books/fantasy.json"
import SearchBar from "./components/MySearchBar"

// className={this.state.selected ? 'border border-danger' : ' '}
class App extends Component {
  state = {
    // salvo l'asin del libro selezionato
    BookAsin: null,
  }

  // per aggiornare lo stato
  changeAppState = (value) => {
    this.setState({
      BookAsin: value,
    })
  }

  render() {
    return (
      <div id="root">
        <header>
          <MyNav />
          <Welcome />
        </header>
        <main>
          <SearchBar />
          {/* <Books /> lo commento per sostituirlo con una nuova implementazione */}

          <BookList books={fantasyBooks} changeAppState={this.changeAppState} />
        </main>
        <MyFooter />
      </div>
    )
  }
}

export default App
