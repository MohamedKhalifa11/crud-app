import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { productID } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      {product && (
        <>
          <img
            src={product.thumbnail}
            alt="Not Found"
            style={{ width: "500px" }}
          />
          <h2>{product.title}</h2>
          <h4>{product.description}</h4>
          <p>{product.price}</p>
        </>
      )}
    </>
  );
}

export default ProductDetails;
