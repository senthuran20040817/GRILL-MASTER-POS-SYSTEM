import Biller from "./Biller"
import Inventory from "./Inventory"

function Border({addItem, increaseQty, decreaseQty, order, deleteOrderItem}) {
    const types = ["burger", "side", "drink", "dessert", "combo"];
      
    return (
        <div className="flex h-full gap-3 p-3 flex-1 min-h-0">
            <div className="w-1/4 hidden xl:block ">
                <Biller
                    order={order}
                    deleteOrderItem={deleteOrderItem}
                />
            </div>
            <div className="w-full xl:w-3/4 border-[#26b29d] border-4 rounded-md p-2 md:p-5 overflow-y-auto scrollbar-none">
                <Inventory
                    types={types}
                    order={order}
                    addItem={addItem}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                />
            </div>
        </div>
    );
}

export default Border