import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../../services/ApiService";
import { Table, Button } from "react-bootstrap";

const api = new ApiService("http://localhost:3000");

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await api.getAll("categories");
        setCategories(data);
      } catch (error) {
        alert("categoriler getirlimedi");
      }
    };
    fetchCategories();
  }, []);

  const handleDeleteClick = async () => {
    if (selectedCategoryIds.length === 0) {
      alert("silmek için bir kategory seçin");
      return;
    }
    try {
      for (const id of selectedCategoryIds) {
        await api.makeDelete("categories", id);
      }
      alert("Category Sİlindi");
      setCategories((prev) =>
        prev.filter((category) => !selectedCategoryIds.includes(category.id))
      );
      setSelectedCategoryIds([]);
    } catch (error) {
      alert("category silinemedi");
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedCategoryIds((prev) => {
      if (prev.includes(id)) {
        // Eğer id zaten seçilmişse
        return prev.filter((categoryId) => categoryId !== id);
      } else {
        // Eğer id seçili değilse
        return [...prev, id];
      }
    });
  };

  const handleUpdateClick = () => {
    selectedCategoryIds.length === 1
      ? navigate(`/categories/Update/${selectedCategoryIds}`)
      : alert("lütfen sadece 1 category seçiniz");
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>CategoryName</th>
          <th>Description</th>
          <th>
            <Button onClick={() => navigate("/categories/Add")}>
              Ekleme Yapmak için Tıkla
            </Button>
          </th>
          <th>
            <Button onClick={handleUpdateClick}>
              Güncelleme yapmak için Tıkla
            </Button>
          </th>
          <th>
            <Button onClick={handleDeleteClick}>Silmek için Tıkla</Button>
          </th>
          <th>Selector</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => {
          return (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.categoryName}</td>
              <td>{category.description}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(category.id)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default CategoryList;
