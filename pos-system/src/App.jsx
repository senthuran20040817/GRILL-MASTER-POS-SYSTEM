import './App.css'
import Header from "./components/Header"
import Border from "./components/Border"
import Receipt from "./components/Receipt"
import { useState } from "react";

function App() {
  const [order, setOrder] = useState([]);
  let discount = 8;

  function deleteOrderItem(o) {
    console.log("check");
    setOrder(
      order.filter((or) => o.name !== or.name)
    );
  }

  function clearOrderArray() {
    setOrder([]);
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
    <>
      <div className="print:hidden flex h-screen flex-col overflow-hidden">
        <div className="h-1/12 lg:h-1/8">
          <Header
            order={order}
            deleteOrderItem={deleteOrderItem}
            clearOrderArray={clearOrderArray}
            discount={discount}
          />
        </div>
        <div className="h-11/12 lg:h-7/8">
          <Border
            addItem={addItem}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            order={order}
            deleteOrderItem={deleteOrderItem}
            clearOrderArray={clearOrderArray}
            discount={discount}
          />
        </div>
      </div>
      <div className="hidden print:block">
        <Receipt 
          order={order}
          discount={discount}
        />
      </div>
    </>
  )
}

export default App
