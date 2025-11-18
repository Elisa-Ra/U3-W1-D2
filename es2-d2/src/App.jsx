import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import Container from "react-bootstrap/Container"
import MyNav from "./components/MyNav"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import Books from "./components/AllTheBooks"

function App() {
  return (
    <div id="root">
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <Books />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
