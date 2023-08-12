import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import ProducutItem from "../components/ProducutItem";
import SearchBarAndLogo from "../components/SearchBarAndLogo";

function MoreAccessories() {
  return (
    <div>
      <SearchBarAndLogo />
      <NavBar />

      <ProductList />
    </div>
  );
}

export default MoreAccessories;
