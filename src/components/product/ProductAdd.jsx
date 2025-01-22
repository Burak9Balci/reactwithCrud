import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ApiService from "../../services/ApiService";
import Product from "../../Models/Product";
const api = new ApiService("http://localhost:3000");
const ProductAdd = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await api.getAll("categories");
        setCategories(categories);
      } catch (error) {
        console.log(`ürünler getirilemedi`);
      }
    };
    fetchCategories();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !price || !categoryId) {
      alert("Lütfen tüm alanları doldursana evladımmmm.");
      return;
    }

    if (isNaN(price)) {
      alert("Ücreti sayı olarak gir");
      return;
    }
    const newProduct = new Product(productName, price, categoryId);
    try {
      await api.makePost("products", newProduct);
      alert("Ürün Eklendi");
      setProductName("");
      setPrice("");
      setCategoryId("");
    } catch (error) {
      console.log(`Ürün eklenirken bir hata oldu ${error}`);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formProductName" className="mb-3">
        <Form.Label>Ürün ismi</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ürün ismini girin"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
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
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Kategori seçin</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.categoryName}
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
