import CoverImage from "../components/CoverImage";
import NavBar from "../components/NavBar";
import SearchBarAndLogo from "../components/SearchBarAndLogo";

function HomePage() {
  return (
    <div className="container">
      <SearchBarAndLogo />
      <NavBar />
      <CoverImage />
    </div>
  );
}

export default HomePage;
