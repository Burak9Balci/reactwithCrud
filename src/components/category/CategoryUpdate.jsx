import { Form, Button } from "react-bootstrap";

const CategoryUpdate = () => {
  class Category {
    constructor(id, categoryName, description) {
      (this.id = id),
        (this.categoryName = categoryName),
        (this.description = description);
    }
  }
  return (
    <main>
      <Form>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Form.Group controlId="formCategoryName" className="mb-3">
            <Form.Label>Kategoryi ismi</Form.Label>
            <Form.Control type="text" placeholder="Kategori adı girin" />
          </Form.Group>

          <Form.Group controlId="formDescription" className="mb-3">
            <Form.Label>Açıklama</Form.Label>
            <Form.Control type="text" placeholder="kategori açıklaması girin" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Gönder
          </Button>
        </div>
      </Form>
    </main>
  );
};
export default CategoryUpdate;
