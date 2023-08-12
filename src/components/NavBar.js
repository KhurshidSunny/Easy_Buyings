import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <NavLink to="/">
          <li className="nav-item">Home</li>
        </NavLink>

        <NavLink to="/products">
          <li className="nav-item">Mobile covers</li>
        </NavLink>

        <NavLink to="/apple-acc">
          <li className="nav-item">Apple accessories</li>
        </NavLink>

        <NavLink to="/cables">
          <li className="nav-item">Cables</li>
        </NavLink>

        <NavLink to="/more">
          <li className="nav-item">More accessories</li>
        </NavLink>

        <NavLink to="/login">
          <li className="nav-item">Login</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default NavBar;
