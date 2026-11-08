import ItemSection from "./ItemSection";

function Inventory({types, order, addItem, increaseQty, decreaseQty}) {
    const items = [
        // Burgers
        { name: "Classic Beef Burger", url: "./src/assets/Designer (1).png", type: "burger", price: 950 },
        { name: "Cheese Burger", url: "./src/assets/Designer (2).png", type: "burger", price: 1050 },
        { name: "Chicken Crispy Burger", url: "./src/assets/Designer (3).png", type: "burger", price: 900 },
        { name: "BBQ Bacon Burger", url: "./src/assets/Designer (4).png", type: "burger", price: 1250 },
        { name: "Spicy Jalapeno Burger", url: "./src/assets/Designer (5).png", type: "burger", price: 1100 },
        { name: "Veggie Burger", url: "./src/assets/Designer (6).png", type: "burger", price: 850 },
        { name: "Double Stack Burger", url: "./src/assets/Designer (7).png", type: "burger", price: 1490 },

        // Fries and Sides
        { name: "Regular Fries", url: "./src/assets/Designer (8).png", type: "side", price: 350 },
        { name: "Large Fries", url: "./src/assets/Designer (9).png", type: "side", price: 500 },
        { name: "Cheese Fries", url: "./src/assets/Designer (10).png", type: "side", price: 650 },
        { name: "Onion Rings", url: "./src/assets/Designer (11).png", type: "side", price: 450 },
        { name: "Chicken Nuggets (6 pcs)", url: "./src/assets/Designer (12).png", type: "side", price: 600 },
        { name: "Coleslaw", url: "./src/assets/Designer (13).png", type: "side", price: 300 },

        // Drinks
        { name: "Classic Cola", url: "./src/assets/Designer (14).png", type: "drink", price: 250 },
        { name: "Lemonade", url: "./src/assets/Designer (15).png", type: "drink", price: 300 },
        { name: "Orange Juice", url: "./src/assets/Designer (16).png", type: "drink", price: 350 },
        { name: "Iced Coffee", url: "./src/assets/Designer (17).png", type: "drink", price: 450 },
        { name: "Chocolate Milkshake", url: "./src/assets/Designer (18).png", type: "drink", price: 600 },
        { name: "Strawberry Milkshake", url: "./src/assets/Designer (19).png", type: "drink", price: 600 },
        { name: "Mineral Water", url: "./src/assets/Designer (20).png", type: "drink", price: 150 },

        // Desserts
        { name: "Vanilla Ice Cream Cup", url: "./src/assets/Designer (21).png", type: "dessert", price: 400 },
        { name: "Chocolate Sundae", url: "./src/assets/Designer (22).png", type: "dessert", price: 550 },
        { name: "Apple Pie", url: "./src/assets/Designer (23).png", type: "dessert", price: 380 },
        { name: "Chocolate Brownie", url: "./src/assets/Designer (24).png", type: "dessert", price: 450 },

        // Combo Meals
        { name: "Classic Combo", url: "./src/assets/Designer (25).png", type: "combo", price: 1350 },
        { name: "Chicken Combo", url: "./src/assets/Designer (26).png", type: "combo", price: 1250 },
        { name: "Family Feast", url: "./src/assets/Designer (27).png", type: "combo", price: 4200 }
    ];

    return (
        types.map((type) => {
            return (
                <div key={type}  className="border-[#1d8676] border-2 p-3 mb-5 rounded-md  bg-[#def7ec]">
                    <div className="bg-[#13594e] text-white mb-2 flex justify-center py-2 rounded-md">
                        <p className="">{type}</p>
                    </div>
                    <div className="grid grid-cols-1 2xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 lg:text-sm gap-5">
                        <ItemSection
                            type={type}
                            items={items}
                            order={order}
                            addItem={addItem}
                            increaseQty={increaseQty}
                            decreaseQty={decreaseQty}
                        />
                    </div>
                </div>
            );
        })
    );
}

export default Inventory