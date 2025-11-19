import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function BasicExample() {
  return (
    <div className="w-50 mx-auto">
      <Form className="d-flex align-items-start gap-2 mt-4">
        <Form.Group controlId="formBasicEmail" className="flex-grow-1">
          <Form.Control type="email" placeholder="Cerca..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cerca
        </Button>
      </Form>
    </div>
  )
}

export default BasicExample
