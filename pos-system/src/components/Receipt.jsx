function Receipt({ order, discount }) {
    let count=1;
    const total = (order.reduce((sum, o) => sum + o.quantity*o.price , 0 )).toFixed(2);
    const discountAmount = (total*discount/100).toFixed(2);

    const now = new Date();

    return (
        <div className="min-h-200 h-fit w-150 border flex flex-col items-center rounded-md shadow-2xl ml-auto mr-auto mt-17">
            <div className="flex flex-col items-center mt-2">
                <p>-------------------------------------------------------------------------------------</p>
                <p className="font-bold">GRILL MASTER</p>
                <p>Burgers . Fries . Shakes</p>
                <div className="text-sm flex justify-center w-full gap-1 pt-2">
                    <p>{now.toLocaleDateString()}</p>
                    <p>{now.toLocaleTimeString()}</p>
                </div>
                
                <p>-------------------------------------------------------------------------------------</p>
            </div>
            <div className="grow flex flex-col items-center">
                <div className="flex justify-between font-bold gap-1">
                    <p className="w-5 text-center">no</p>
                    <p className="w-50 text-center pl-3">item</p>
                    <p className="w-10 text-center">qty</p>
                    <p className="w-20 text-end">unit p.</p>
                    <p className="w-20 text-end">net p.</p>
                </div>
                <p>-------------------------------------------------------------------------------------</p>
                {order.map((o) =>
                    <div className="flex justify-between gap-4">
                        <p className="w-5 text-end">{count++}</p>
                        <p className="w-50 pl-3">{o.name}</p>
                        <p className="w-10 text-center">{o.quantity}</p>
                        <p className="w-20 text-end">{(o.price).toFixed(2)}</p>
                        <p className="w-20 text-end">{(o.price*o.quantity).toFixed(2)}</p>
                    </div>
                )}
            </div>
            <div className="mb-2 ">
                <p>-------------------------------------------------------------------------------------</p>
                <div className="flex justify-between font-bold mx-7">
                    <p>Total</p>
                    <p>{total}</p>
                </div>
                <div className="flex justify-between font-bold mx-7">
                    <p>Discount({discount}%)</p>
                    <p>{discountAmount}</p>
                </div>
                <p>-------------------------------------------------------------------------------------</p>
                <div className="flex justify-between font-bold mx-7">
                    <p>Net Total</p>
                    <p>{(total-discountAmount).toFixed(2)}</p>
                </div>
                <p>-------------------------------------------------------------------------------------</p>
            </div>
        </div>
    );
}

export default Receipt 