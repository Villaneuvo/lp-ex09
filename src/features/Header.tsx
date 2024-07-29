import { Link } from "react-router-dom";
import "../css/Header.css";
import "../css/Header.css";

function Header() {
  return (
    <div className="wrapper">
      <h1>Network Call Practice</h1>
      <nav>
        <ul className="menu-wrapper">
          <li className="menu">
            <Link to="/user">User</Link>
          </li>
          <li className="menu">
            <Link to="/">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
