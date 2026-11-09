import './App.css'
import Header from "./components/Header"
import Border from "./components/Border"
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);

  function deleteOrderItem(o) {
    console.log("check");
    setOrder(
      order.filter((or) => o.name !== or.name)
    );
  }

  function addItem(item) {
    setOrder(
      [
        ...order,
        {
          key: item.name,
          name: item.name,
          price: item.price,
          quantity: 1
        }
      ]
    );
  }

  function increaseQty(item) {
    setOrder(
      order.map((o) => {
        return (
          o.name === item.name ? { ...o, quantity: o.quantity + 1 } : o
        );
      })
    )
  }

  function decreaseQty(item) {
    setOrder(
      order.map((o) => {
        return (
          (o.name === item.name) ? { ...o, quantity: o.quantity - 1 } : o
        )
      }).filter((o) => o.quantity > 0)
    );
  }
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="h-1/12 lg:h-1/8">
        <Header 
          order={order}
          deleteOrderItem={deleteOrderItem}
        />
      </div>
      <div className="h-11/12 lg:h-7/8">
        <Border 
          addItem={addItem}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          order={order}
          deleteOrderItem={deleteOrderItem}
        />
      </div>
    </div>
  )
}

export default App
