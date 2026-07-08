import { useState } from "react";

function App() {

  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  


  const handleProduct = ()=>{
    if(name !== "" && price !== ""){
      const newProduct = {
        id: crypto.randomUUID(),
        name,
        price,
        quantity: 1
      };

      setProducts([...products, newProduct]);
      setName("")
      setPrice("")
    } else{
      alert ("Enter Something")
    }
  }

  // grand total
  const grandTotal = products.reduce((total, product)=> {
    return total + product.price * product.quantity
  }, 0)
  // quantity
  const increment = (id)=>{
    setProducts(
      products.map((product)=>(
        product.id === id ? {...product, quantity: product.quantity + 1} : product
      ))
    )
  }

  const decrement = (id)=>{
    setProducts(
      products.map((product)=>(
        product.id === id && product.quantity > 1 ? {...product, quantity: product.quantity - 1} : product
      ))
    )
  }
  

  

  // remove button
  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  

  return (
    <>
      <div>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Product Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="Price..."
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button onClick={handleProduct}>Add</button>
      </div>

      <div>
        {products.length === 0 ? (
          <p>The cart is an Empty</p>
        ) : (
          <>
            <ul>
              {products.map((product) => (
                <li>
                  <strong>{product.name}</strong>
                  <span> - ${product.price} </span>
                  <div>
                    Quantity :
                    <button onClick={() => decrement(product.id)}>-</button>
                    {product.quantity}
                    <button onClick={() => increment(product.id)}>+</button>
                  </div>
                  <button onClick={() => removeProduct(product.id)}>
                    Remove
                  </button>
                  <div>
                    <strong>Total :$ {product.price * product.quantity}</strong>
                  </div>
                </li>
              ))}
            </ul>
            <div>
              <strong>Grand Total : ${grandTotal} </strong>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
