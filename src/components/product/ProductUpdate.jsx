import { Form, Button } from "react-bootstrap";
const ProductForm = () => {
  class Product {
    constructor(id, productName, price, categoryId) {
      (this.id = id),
        (this.productName = productName),
        (this.price = price),
        (this.categoryId = categoryId);
    }
  }
  return (
    <main>
      <Form>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Form.Group controlId="formProductName" className="mb-3">
            <Form.Label>Ürün ismi</Form.Label>
            <Form.Control type="text" placeholder="Ürün ismini girin" />
          </Form.Group>

          <Form.Group controlId="formPrice" className="mb-3">
            <Form.Label>Fiyat</Form.Label>
            <Form.Control type="text" placeholder="Fiyat girin" />
          </Form.Group>

          <Form.Group controlId="formLastName" className="mb-3">
            <Form.Label>Açıklama</Form.Label>
            <Form.Control type="text" placeholder="Soyadınızı girin" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Gönder
          </Button>
        </div>
      </Form>
    </main>
  );
};
export default ProductForm;
