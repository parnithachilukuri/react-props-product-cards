import ProductCard from "./ProductCard";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Our Products</h1>

      <div className="products">
        <ProductCard
          name="Headphones"
          price="1999"
          image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
        />

        <ProductCard
          name="Smart Watch"
          price="2499"
          image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
        />

        <ProductCard
          name="Shoes"
          price="2999"
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
        />

        <ProductCard
          name="Camera"
          price="15999"
          image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
        />
      </div>
    </div>
  );
}

export default App;