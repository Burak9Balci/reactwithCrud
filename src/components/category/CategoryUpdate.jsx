import { Form, Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import Category from "../../Models/Category";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const api = new ApiService("http://localhost:3000");

const CategoryUpdate = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryName || !description) {
      alert("alanları doldurun");
      return;
    }

    const newCategory = new Category(categoryName, description);
    try {
      await api.makePut("categories", id, newCategory);
      alert("Category Güncellendi");
      setDescription("");
      setCategoryName("");
      navigate("/categories");
    } catch (error) {
      alert("Category güncellenirken hata olustu");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center align-items-center flex-column"
    >
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
    </Form>
  );
};
export default CategoryUpdate;
