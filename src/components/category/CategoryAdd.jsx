import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import Category from "../../Models/Category";
const api = new ApiService("http://localhost:3000");

const CategoryAdd = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName || !description) {
      alert("tümalanları doldurrrrrrrr");
      return;
    }
    const newCategory = new Category(categoryName, description);
    try {
      await api.makePost("categories", newCategory);
      alert("kategori oluşturuldu");
      setCategoryName("");
      setDescription("");
    } catch (error) {
      alert("category eklerken hata olustu");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <Form.Group controlId="formCategoryName" className="mb-3">
          <Form.Label>Kategoryi ismi</Form.Label>
          <Form.Control
            onChange={(e) => setCategoryName(e.target.value)}
            type="text"
            placeholder="Kategori adı girin"
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Açıklama</Form.Label>
          <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="kategori açıklaması girin"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Gönder
        </Button>
      </div>
    </Form>
  );
};
export default CategoryAdd;
