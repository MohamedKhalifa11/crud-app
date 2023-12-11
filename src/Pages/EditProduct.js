import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditProduct() {
  let { productID } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");

  let navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:9000/products/${productID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
        thumbnail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/products");
      });
  };

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setThumbnail(data.thumbnail);
      });
  }, []);

  return (
    <>
      <h2>Edit Product</h2>
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDesc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="productDesc"
            aria-describedby="productDesc"
            placeholder="product Description"
            value={description}
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
            value={price}
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
          />https://basic-ecommerce-delta.vercel.app/
          {thumbnail && (
            <img
              src={thumbnail}
              alt="No Thumbnail"
              style={{ maxWidth: "100px", marginTop: "10px" }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </>
  );
}

export default EditProduct;
