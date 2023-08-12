import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import SearchBarAndLogo from "../components/SearchBarAndLogo";

function AppLayout() {
  return (
    <div>
      <SearchBarAndLogo />
      <NavBar />

      <ProductList />
    </div>
  );
}

export default AppLayout;
