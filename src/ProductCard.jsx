function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;