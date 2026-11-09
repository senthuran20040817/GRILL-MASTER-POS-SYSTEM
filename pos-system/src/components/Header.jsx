import { useState } from "react";
import Biller from "./Biller"

function Header({order, deleteOrderItem, clearOrderArray, discount}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="h-full p-3 pb-0 ">
            <div className=" h-full bg-[#06d6a0] flex justify-between items-center font-bold text-2xl text-[#343a40] px-2 xl:px-5 rounded-md">
                <div className="w-40 xl:w-90 md:w-70 2xl:w-120">
                    <img src="./src/assets/favicon.svg" alt="" />
                </div>
                <div onClick={() => setOpen(!open)} className="lg:hidden bg-[#0c5e50] md:p-3 p-2 rounded-md flex justify-center items-center">
                    <img className="md:w-8 w-3" src="./src/assets/bill-svgrepo-com.svg" alt="bill-icon" />
                    {open && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                            onClick={() => setOpen(false)}
                        >
                            <div
                                className="w-96 rounded-lg bg-white p-4 text-black shadow-xl font-normal text-sm"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Biller
                                    order={order}
                                    deleteOrderItem={deleteOrderItem}
                                    clearOrderArray={clearOrderArray}
                                    discount={discount}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header