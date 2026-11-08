//import { useState } from "react";

function Item({ name, items, order, addItem, increaseQty, decreaseQty }) {

    return (
        items.filter((item) => { return item.name === name }).map((item) => {
            return (
                <div key={item.name} className="group overflow-hidden border-[#0e9f6e] border-2 rounded-md bg-[#bcf0da] hover:shadow-2xl duration-500 flex md:flex-col xl:justify-between ">
                    <div className="relative overflow-hidden rounded-2xl m-2">
                        <img className="group-hover:scale-105 md:w-full w-25 object-cover transition-transform duration-500 ease-in-out" src={item.url} alt={item.name} />
                        <div className={`absolute ${order.some((o) => o.name === item.name && o.quantity > 0 ) ? "block" : "hidden"} bg-[#156064] text-[#00ff87] font-bold border-2 border-[#00ff87] top-2 right-2 rounded-md md:w-8 md:h-8 w-5 h-5 md:text-md text-sm flex justify-center items-center`}>
                            <p>{order.find((o) => o.name === item.name)?.quantity}</p>
                        </div>
                    </div>
                    <div className="md:w-full w-3/4 flex flex-col justify-between my-2 md:my-0">
                        <p className="text-center text-[#005f60] font-bold">{item.name}</p>
                        <p className="text-center text-[#005f60]">Rs. {item.price}.00</p>
                        <div className="flex justify-between ">
                            <button
                                onClick={() => addItem(item)}
                                disabled={order.some((o) => (o.name === item.name && o.quantity > 0) ? true : false)}
                                className="bg-[#13594e] disabled:opacity-50 text-white w-3/4 m-1 rounded-sm cursor-pointer"
                            >Add to Cart</button>
                            <div className="w-1/4 flex m-1">
                                <button onClick={() => increaseQty(item)} className="bg-[#13594e] text-white rounded-l-sm cursor-pointer w-full border-r py-1">+</button>
                                <button onClick={() => decreaseQty(item)} className="bg-[#13594e] text-white rounded-r-sm cursor-pointer w-full border-l ">-</button>
                            </div>
                        </div>
                    </div>

                </div>
            );
        })
    );
}

export default Item