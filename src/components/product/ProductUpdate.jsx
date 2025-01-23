import { Form, Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Models/Product";

const ProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await ApiService.getAll("categories");
      setCategories(categories);
    };
    fetchCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName || !price || !categoryId) {
      alert("alanları doldurun");
      return;
    }
    if (isNaN(price)) {
      alert("Ücreti sayı olarak gir");
      return;
    }
    const newProduct = new Product(productName, +price, categoryId);
    try {
      await ApiService.makePut("products", id, newProduct);
      alert("Güncelleme yapıldı");
      setProductName("");
      setPrice("");
      setCategoryId("");
    } catch (error) {
      alert("güncelleme sırasında hata yaşandı id de hata olabilir");
    }
  };
  return (
    <Form
      className="d-flex justify-content-center align-items-center flex-column"
      onSubmit={handleSubmit}
    >
      <Form.Group controlId="formProductName" className="mb-3">
        <Form.Label>Ürün ismi</Form.Label>
        <Form.Control
          value={productName}
          type="text"
          placeholder="Ürün ismini girin"
          onChange={(e) => setProductName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPrice" className="mb-3">
        <Form.Label>Fiyat</Form.Label>
        <Form.Control
          value={price}
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Fiyat girin"
        />
      </Form.Group>

      <Form.Group controlId="formCategory" className="mb-3">
        <Form.Label>Kategori</Form.Label>
        <Form.Select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Kategori Seçin</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Gönder
      </Button>
    </Form>
  );
};
export default ProductForm;
