import { Form, Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import Category from "../../Models/Category";
import { useState } from "react";
const api = new ApiService("http://localhost:3000");

const CategoryUpdate = () => {
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName || !description) {
      alert("alanları doldurun");
      return;
    }
    const newCategory = new Category(categoryName, description);
    try {
      await api.makePut("categories", "", newCategory);
      alert("Category Güncellendi");
      setDescription("");
      setCategoryName("");
    } catch (error) {
      alert("Category güncellenirken hata olustu");
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
export default CategoryUpdate;
