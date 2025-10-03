import { useEffect, useState } from "react"
import Logo from "./assets/logo.png"

function App() {
  const [inventory, setInventory] = useState(() => {
    const stored = localStorage.getItem("inventory")
    return stored ? JSON.parse(stored) : [
      { id: 1, title: "Batman", price: 2000, image: "/bat.jpeg", unit: 1, favourite: false },
      { id: 2, title: "Adeyemi", price: 3000, image: "/ade.jpg", unit: 1, favourite: false },
      { id: 3, title: "Boys", price: 4000, image: "/bg.jpg", unit: 1, favourite: false },
      { id: 4, title: "Bulb", price: 5000, image: "/education.jpg", unit: 1, favourite: false },
      { id: 5, title: "Stationary", price: 6000, image: "/values-bg.jpg", unit: 1, favourite: false },
      { id: 6, title: "Bat", price: 2000, image: "/bat.jpeg", unit: 1, favourite: false },
      { id: 7, title: "Ade", price: 3000, image: "/ade.jpg", unit: 1, favourite: false },
      { id: 8, title: "The Boys", price: 4000, image: "/bg.jpg", unit: 1, favourite: false },
    ]
  })
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart")
    return stored ? JSON.parse(stored) : [
      { id: 0, title: "Travelling Bag", price: 20000, image: "/ade.jpg", unit: 1 },
      { id: 1, title: "MacBook", price: 2000000, image: "/bat.jpeg", unit: 1 }
    ]
  })
  // useEffect(() => {
  //   console.log(cart)
  //   console.log(inventory);

  // }, [inventory])
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
  const deleteCartItem = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      setCart((prev) => prev.filter((_, i) => i !== index))
    }
  }
  const deleteInventoryItem = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");

    if (confirmed) {
      setInventory((prev) => prev.filter((_, i) => i !== index));
    }
  };
  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.unit,
    0
  );

  const [cartState, setCartState] = useState({ text: "Open", state: false })
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
        item.id === id ? { ...item, favourite: !item.favourite } : item
      )
    )
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
    localStorage.setItem("inventory", JSON.stringify(inventory))
    // localStorage.clear()
  }, [inventory, cart])

  const [itemName, setItemName] = useState("")
  const [itemPrice, setItemPrice] = useState("")
  const [itemImage, setItemImage] = useState(null)
  const [itemPreview, setItemPreview] = useState()

  const [addItemToggle, setAddItemToggle] = useState(false)
  const handleToggleItem = () => {
    setAddItemToggle(!addItemToggle)
  }
  const handleAddItem = (e) => {
    e.preventDefault()
    const existsInInventory = inventory.some((item) => item.title.toLowerCase() === itemName.toLowerCase())
    if (!existsInInventory) {

      const addedItem = { id: Math.random(), title: itemName, price: Number(itemPrice), image: itemImage, unit: 1, favourite: false }
      setInventory((prev) => { return [...prev, addedItem] })
    } else {
      alert("Item name already exists")
    }

    console.log(inventory)
    setItemPrice("")
    setItemImage("")
    setItemName("")
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);

    if (file) {
      // Create a preview URL for display
      const previewUrl = URL.createObjectURL(file);
      setItemImage(previewUrl);
      setItemPreview(previewUrl)
    }
  };


  return (
    <div className="parent">
      <section className="spcl"><button onClick={handleToggleItem} className="crt-btn">Create Item</button></section>
      {addItemToggle === true && (
        <div className="form">
          <form className="item-form" onSubmit={handleAddItem}>
            <input type="text" placeholder="Enter Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required />
            <input type="number" placeholder="Enter Item Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />
            <input type="file" accept="image/*" onChange={handleImageChange} required />
            {itemPreview && (
              <img src={itemPreview} alt={itemName} />
            )}
            <button type="submit">Add Item</button>
          </form>
        </div>
      )}
      <div className="market">
        {inventory.map((item, index) => {
          return (
            <div key={item.id} className="market-item">
              <img src={item.image} alt={item.title} />
              <h1>{item.title}</h1>
              <p>{item.price.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</p>
              <div className="unit"><button onClick={() => increaseUnit(item.id, item.title)}>+</button> <h2>{item.unit}</h2> <button onClick={() => decreaseUnit(item.id, item.title)}>-</button></div>
              <h5 onClick={() => toggleFav(item.id)}><button className={`fav ${item.favourite ? "active" : ""}`}></button> <span>Favourite</span></h5>
              <button className="add-btn" onClick={() => updateCart(item.id, item.title, item.price, item.image, item.unit)}>Add To Cart</button>
              <button className="del-btn" onClick={() => deleteInventoryItem(index)}>Delete</button>
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
                    <p>{item.title} <span>{item.unit} unit(s)</span> <span>{(item.unit * item.price).toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</span></p>
                    <button onClick={() => deleteCartItem(index)}>Delete</button>
                  </div>
                )
              })}

              <ul className="cart-total">
                <li>Total:</li>
                <li>{grandTotal.toLocaleString("en-NG", { style: "currency", currency: "NGN" })}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App