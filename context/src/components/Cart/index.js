import CartItem from "../CartItem";
import "./styles.css";

const Cart = () => {
  return (
    <aside className="cart">
      <header className="cart-header">
        <h2>Seu carrinho</h2>
      </header>

      <div className="cart-empty">
        {/* <p>está vazio...</p> */}
      </div>

      <div className="cart-items">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <footer className="cart-total">
        <h2>Total: R$ 43.629,70</h2>
      </footer>
    </aside>
  );
}

export default Cart;