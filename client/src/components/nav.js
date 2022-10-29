import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav class="nav-links">
      <Link to="/">
        <h3>Clearance</h3>
      </Link>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
