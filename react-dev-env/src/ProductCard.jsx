import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, name, price, inStock, imageUrl }) => {
  const navigate = useNavigate();
  return (
    <div id="product-card-div">
      <div id="image-overlay-div">
        <img
          id="product-card-img"
          src={imageUrl}
          onClick={() => {
            navigate(`/products/${id}`);
          }}
        ></img>
        <div className={inStock ? "img-in-stock" : "img-out-stock"}>
          Out of Stock
        </div>
      </div>
      <h3
        id="product-card-name"
        onClick={() => {
          navigate(`/products/${id}`);
        }}
      >
        {name}
      </h3>
      <p id="product-card-price">${price}</p>
    </div>
  );
};

export default ProductCard;
