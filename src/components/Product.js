export default function Product(props) {
  const { item, product, onAdd, onRemove } = props;
  return (
    <div className="card">
      <img className="box myImages card-img-top" src={product.image} alt={product.name} />
      <h6>{product.name}</h6>
    
      <h6>{product.price} €</h6>
      <div>
        {item ? (
          <div>
          <button onClick={() => onRemove(product)} className="button remove"><h6>Remove from Cart</h6></button>

            {/* <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button> */}
          </div>
        ) : (
          <button onClick={() => onAdd(product)} className="button add"><h6>Add To Cart</h6></button>
        )}
      </div>
    </div>
  );
}
