import { useEffect, useState } from "react"
import Logo from "./assets/logo.png"

function App() {
  const [inventory, setInventory] = useState(() => {
    const stored = localStorage.getItem("inventory")
    return stored ? JSON.parse(stored) : [
      { id: 1, title: "Batman", price: 2000, image: "/src/assets/bat.jpeg", unit: 0, favourite: false },
      { id: 2, title: "Adeyemi", price: 3000, image: "/src/assets/ade.jpg", unit: 0, favourite: false },
      { id: 3, title: "Boys", price: 4000, image: "/src/assets/bg.jpg", unit: 0, favourite: false },
      { id: 4, title: "Bulb", price: 5000, image: "/src/assets/education.jpg", unit: 0, favourite: false },
      { id: 5, title: "Stationary", price: 6000, image: "/src/assets/values-bg.jpg", unit: 0, favourite: false },
      { id: 6, title: "Bat", price: 2000, image: "/src/assets/bat.jpeg", unit: 0, favourite: false },
      { id: 7, title: "Ade", price: 3000, image: "/src/assets/ade.jpg", unit: 0, favourite: false },
      { id: 8, title: "The Boys", price: 4000, image: "/src/assets/bg.jpg", unit: 0, favourite: false },
    ]
  })

  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : [
      { id: 0, title: "Travelling Bag", price: 20000, image: "/src/assets/ade.jpg", unit: 0 },
      { id: 1, title: "MacBook", price: 2000000, image: "/src/assets/bat.jpeg", unit: 0 }
    ]
  })
  useEffect(() => {
    console.log(cart)
  }, [cart])

  const updateCart = (id, title, price, image, unit) => {
    const cartItem = { id, title: title, price: price, image, unit }
    if (!cart.some((item) => item.title.toLowerCase() === title.toLowerCase())) {
      setCart((prev) => [...prev, cartItem])
    } else { setCart(cart) }
  }

  const increaseUnit = (id, title) => {
    const existsInCart = cart.some(
      (item) => item.title.toLowerCase() === title.toLowerCase()
    );

    if (existsInCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.title.toLowerCase() === title.toLowerCase()
            ? { ...item, unit: Math.min(item.unit + 1, 10) }
            : item
        )
      );

      setInventory((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, unit: Math.min(item.unit + 1, 10) }
            : item
        )
      );
    } else {
      setInventory((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, unit: Math.min(item.unit + 1, 10) }
            : item
        )
      );
    }
  };

  const decreaseUnit = (id, title) => {
    const existsInCart = cart.some((item) => item.title.toLowerCase() === title.toLowerCase())
    if (existsInCart) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, unit: Math.max(item.unit - 1, 0) } : item
        )
      )
      setInventory((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, unit: Math.max(item.unit - 1, 0) } : item
        )
      )
      setInventory((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, unit: Math.max(item.unit - 1, 0) } : item
        )
      )
    }

  }
  const deleteItem = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index))
  }
  const [cartState, setCartState] = useState({text: "Open", state: false})
  const toggleCart = () => {
    setCartState((prev) => ({
      ...prev,
      state: !prev.state,
      text: prev.state ? "Open" : "Close"
    }));
  };
  const toggleFav = (id) => {
    setInventory((prev) => 
      prev.map((item) => 
        item.id === id ? {...item, favourite: !item.favourite} : item
      )
    )
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("inventory", JSON.stringify(inventory))
  }, [inventory, cart])

  return (
    <div className="parent">
      <h1>hello</h1>
      <div className="market">
        {inventory.map((item) => {
          return (
            <div key={item.id} className="market-item">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <p>${item.price}</p>
              <div className="unit"><button onClick={() => increaseUnit(item.id, item.title)}>+</button> <h2>{item.unit}</h2> <button onClick={() => decreaseUnit(item.id, item.title)}>-</button></div>
              <h5 onClick={() => toggleFav(item.id)}><button className={`fav ${item.favourite ? "active" : ""}`}></button> <span>Favourite</span></h5>
              <button className="add-btn" onClick={() => updateCart(item.id, item.title, item.price, item.image, item.unit)}>Add To Cart</button>
            </div>
          )
        })}
      </div>

      <div className="box">
      <div className="cart-nav">
      <h1>Cart ({cart.length})</h1>
      <button onClick={toggleCart}>{cartState.text}</button>
      </div>
        <div className={`cart ${cartState.state ? "active" : ""}`}>
          {cart.length > 0 && (
            <div>
              {cart.map((item, index) => {
                return (
                  <div className="crate" key={item.id}>
                    <img className="cart-img" src={item.image} alt={item.title} />
                    <p>{item.title} <span>{item.unit} unit(s)</span> <span>${item.price}</span></p>
                    <button onClick={() => deleteItem(index)}>Delete</button>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App