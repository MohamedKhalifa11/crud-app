import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="nav list-unstyled">
        <li>
          <Link className="mt-3 nav-link" to="products">
            Get All Products
          </Link>
        </li>
        <li>
          <Link className="mt-3 nav-link" to="#">
            Get All Categories
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
