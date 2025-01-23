import { Routes, Route } from "react-router-dom";
import CategoryAdd from "../components/category/CategoryAdd";
import CategoryList from "../components/category/CategoryList";
import CategoryUpdate from "../components/category/CategoryUpdate";
import ProductAdd from "../components/product/ProductAdd";
import ProductList from "../components/product/ProductList";
import ProductUpdate from "../components/product/ProductUpdate";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/categories/Add" element={<CategoryAdd />} />
      <Route path="/products/Add" element={<ProductAdd />} />
      <Route path="/categories" element={<CategoryList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/categories/Update/:id" element={<CategoryUpdate />} />
      <Route path="/products/Update/:id" element={<ProductUpdate />} />
    </Routes>
  );
};
export default AppRoutes;
