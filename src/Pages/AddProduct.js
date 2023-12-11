import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);

  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price,
        thumbnail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/products");
      });
  };

  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            aria-describedby="productTitle"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productDescription"
            aria-describedby="productDescription"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductPrice" className="form-label">
            Price
          </label>

          <input
            type="number"
            className="form-control"
            id="ProductPrice"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ProductThumbnail" className="form-label">
            Thumbnail
          </label>

          <input
            type="file"
            className="form-control"
            id="ProductThumbnail"
            accept=".jpg, .jpeg, .png, .svg"
            onChange={(e) =>
              setThumbnail(URL.createObjectURL(e.target.files[0]))
            }
          />
          {thumbnail && (
            <img
              src={thumbnail}
              alt="No Thumbnail"
              style={{ maxWidth: "100px", marginTop: "10px" }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
