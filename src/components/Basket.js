export default function Basket(props) {
  // const { cartItems, onAdd, onRemove } = props;
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.19;
  const shippingPrice = itemsPrice > 200 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <aside className="block column1">
      <h3>Cart Items</h3>
      <div>
        {cartItems.length === 0 && <h6>* Cart is empty</h6>}
        {/* {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="column1">{item.name}</div>
            <div className="column1">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <div className="column1 text-right">
              {item.qty} x €{item.price.toFixed(2)}
            </div>
          </div>
        ))} */}
        {cartItems.length !== 0 && (
          <>
          <h6>* For purchases under 200€ the shipping charge is 10€</h6>

            <hr />
            <div className="flex-container">
              <div className="column2">Items Price</div>
              <div className="column1 text-right">€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="flex-container">
              <div className="column2">Tax Price</div>
              <div className="column1 text-right">€{taxPrice.toFixed(2)}</div>
            </div>
            <div className="flex-container">
              <div className="column2">Shipping Price</div>
              <div className="column1 text-right">
                €{shippingPrice.toFixed(2)}
              </div>
            </div>
            <div className="flex-container">
              <div className="column2">
                <strong>Total Price</strong>
              </div>
              <div className="column1 text-right">
                <strong>€{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="flex-container">
              <button className="button btn-lg btn-success" type="submit" id="submit-button" onClick={() => alert('Implement Checkout!')}>
                <h3>Pay</h3>
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
