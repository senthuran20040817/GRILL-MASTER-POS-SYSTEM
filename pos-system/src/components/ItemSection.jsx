import Item from "./Item"

function ItemSection({ type, items, order, addItem, increaseQty, decreaseQty}) {
    return (
        items.filter((item) => {return item.type === type }).map((item) => {
            return (
                <Item
                    key={item.name}
                    name={item.name}
                    items={items}
                    order={order}
                    addItem={addItem}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                />
            );
        })
    );
}

export default ItemSection