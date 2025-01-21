import { Routes, Route } from "react-router-dom";
import CategoryAdd from "../components/category/Add";
import CategoryList from "../components/category/List";
import CategoryUpdate from "../components/category/Update";
import ProductAdd from "../components/product/Add";
import ProductList from "../components/product/List";
import ProductUpdate from "../components/product/Update";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/categories/Add" element={<CategoryAdd />} />
      <Route path="/products/Add" element={<ProductAdd />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/categories/Update" element={<CategoryUpdate />} />
      <Route path="/products/Update" element={<ProductUpdate />} />
    </Routes>
  );
};
export default AppRoutes;
