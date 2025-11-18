import Alert from "react-bootstrap/Alert"

function WelcomeAlert() {
  return (
    <Alert variant="info" className="w-50 mx-auto mt-3">
      <Alert.Heading>Benvenuto in EpiBooks</Alert.Heading>
      <p>Lo shop di libri più epico del web.</p>
    </Alert>
  )
}

export default WelcomeAlert
