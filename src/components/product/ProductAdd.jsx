import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

cl;

const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefult();
  };
  return (
    <div>
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
  );
};
export default ProductAdd;
