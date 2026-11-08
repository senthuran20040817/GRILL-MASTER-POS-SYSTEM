function Biller({ order }) {
    let count = 1;
    let total = order.reduce((sum, o) => sum + o.price*o.quantity , 0);
    let discount = 25;
    return (
        <div className="flex flex-col justify-between p-2 h-full gap-2 bg-[#def7ec] rounded-md border-[#26b29d] border-4 ">
            <h2 className="text-center text-white text-2xlp py-1 bg-[#057a55] rounded-md">billing</h2>
            <div className="grow rounded-md overflow-y-scroll scrollbar-none h-100 xl:h-full">
                {order.map((o) => {
                    return(
                        <div key={o.name} className="text-sm 2xl:text-lg flex justify-between px-2 bg-[#bcf0da] my-2 border-[#84e1bc] border-2 rounded-sm">
                            <p className="w-1/8">{count<10 ? 0 : ""}{count++}</p>
                            <p className="w-4/8">{o.name}</p>
                            <p className="w-1/8 text-center">{o.quantity}</p>
                            <p className="w-2/8 text-end">{(o.price * o.quantity).toFixed(2)}</p>
                        </div>
                    );
                })}
            </div>
            <div className="bg-[#057a55] text-white h-24 rounded-md grid grid-cols-2 grid-rows-3 p-2 gap-2">
                <p className="font-bold">Sub. Total : </p>
                <p className="text-end">{total.toFixed(2)}</p>
                <p className="font-bold">Discount(%) : </p>
                <p className="text-end">{discount.toFixed(0)}%</p>
                <p className="font-bold">Net. Total : </p>
                <p className="text-end">{(total*(100-discount)/100).toFixed(2)}</p>
            </div>
            <div className="bg-[#1d8676] text-white rounded-md text-center py-1">
                <button>Print Bill</button>
            </div>
        </div>
    );
}

export default Biller