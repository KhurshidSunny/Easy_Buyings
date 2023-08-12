import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDescription from "./components/ItemDescription";
import ProductList from "./components/ProductList";
import AppLayout from "./pages/AppLayout";

import AppleAccessories from "./pages/AppleAccessories";
import HomePage from "./pages/HomePage";
import MobileCovers from "./pages/MobileCovers";
import Cables from "./pages/Cables";
import MoreAccessories from "./pages/MoreAccessories";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
// import ItemDescription from "./features/ItemDescription";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="products" element={<MobileCovers />} />

          <Route path="products/:id" element={<ItemDescription />} />
          <Route path="apple-acc" element={<AppleAccessories />} />
          <Route path="cables" element={<Cables />} />
          <Route path="more" element={<MoreAccessories />} />

          <Route path="app-layout" element={<AppLayout />} />

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
