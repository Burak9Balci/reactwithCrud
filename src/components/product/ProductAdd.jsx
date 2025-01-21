import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";
const api = new ApiService("http://localhost:3000");

const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = api.getAll();
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductName" className="mb-3">
        <Form.Label>Ürün ismi</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün ismini girin"
          value={productName}
          onChange={(e) => e.target.value}
        />
      </Form.Group>

      <Form.Group controlId="formPrice" className="mb-3">
        <Form.Label>Fiyat</Form.Label>
        <Form.Control
          type="text"
          placeholder="Fiyat girin"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formCategory" className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Kategori seçin</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Gönder
      </Button>
    </Form>
  );
};
export default ProductAdd;
