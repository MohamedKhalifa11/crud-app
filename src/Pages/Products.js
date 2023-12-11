import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "./Products.css";

function Products() {
  const api_url = "http://localhost:9000/products";

  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const MySwal = withReactContent(Swal);

  const deleteProduct = (product) => {
    MySwal.fire({
      title: `Are You Sure You Want To Delete ${product.title}?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`${api_url}/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => getAllProducts());
      }
    });
  };

  return (
    <>
      <h2>Products Page</h2>
      <Link className="btn btn-success my-3" to={"/products/add"}>
        Add Product
      </Link>
      <table className="table table-striped caption-top products-table">
        <caption>List of Products</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Thumbnial</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td className="text-truncate">{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <img src={product.thumbnail} alt={product.title} />
                </td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm"
                    to={`/products/edit/${product.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-info btn-sm"
                    to={`/products/${product.id}`}
                  >
                    View
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
