import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";
import { Table, Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
const api = new ApiService("http://localhost:3000");
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = api.getAll("products");
        setProducts(products);
      } catch (error) {
        alert("Ürünler gelirken hata oldu api de hata olabilir");
      }
    };
    fetchProducts();
  }, []);
  const handleCheckBoxChange = (id) => {
    setSelectedProductIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((productId) => productId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleDeleteClick = async () => {
    if (selectedProductIds.length === 0) {
      alert("silme yapmak için textbox seç");
      return;
    }
    try {
      for (const id of selectedProductIds) {
        await api.makeDelete("products", id);
      }
      alert("Silinme tamamlandı");
      setProducts((prevProducts) => {
        prevProducts.filter(
          (product) => !selectedProductIds.includes(product.id)
        );
      });
      setSelectedProductIds([]);
    } catch (error) {
      alert("silme işlemi gerçekleşemedi");
    }
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>ProductName</th>
          <th>Price</th>
          <th>CategoryID</th>
          <th>
            <Button onClick={() => Navigate("/products/Add")}>
              Ekleme Yap
            </Button>
          </th>
          <th>
            <Button onClick={ss}>Güncelle</Button>
          </th>
          <th>
            <Button onClick={handleDeleteClick}>Sil</Button>
          </th>
          <th>Seç</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.categorId}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProductIds.includes(product.id)}
                  onClick={handleCheckBoxChange}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default ProductList;
