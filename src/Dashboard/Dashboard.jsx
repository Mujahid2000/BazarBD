import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { FaBoxOpen } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdCreateNewFolder } from "react-icons/md";

const Dashboard = () => {
    const [open , setOpen] = useState(true);


    return (
        <div className="flex">
            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-blue-950 relative`}>
                <button onClick={() => setOpen(!open)} className={` absolute cursor-pointer -right-3 rounded-full top-9 w-7 border-2 border-white bg-white ${!open && 'rotate-180'}`}><IoIosArrowBack></IoIosArrowBack></button>
                <div>
                    <img className="max-w-10 mx-auto mt-4" src="https://i.ibb.co/Hh30kKG/image-300x300.png" alt="" />
                    <h2 className={`${open ? 'text-3xl mt-2 font-bold text-center duration-300 text-white font-serif' : 'text-white font-serif text-center mt-2 text-base duration-300'}`}>BazarBD</h2>
                </div>
                <ul className="px-5">
                <li><NavLink to={'customers'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><FaUsers className=" h-5 w-5 text-white"></FaUsers> <h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Customers </h3>  </NavLink></li>
                <li><NavLink to={'order'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><VscBook className=" h-5 w-5 text-white"></VscBook> <h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}> Order</h3>  </NavLink></li>
                <li><NavLink to={'products'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><FaBoxOpen className=" h-5 w-5 text-white"></FaBoxOpen> <h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}> Products</h3>  </NavLink></li>
                <li><NavLink to={'appliedSeller'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><FaListAlt className=" h-5 w-5 text-white"></FaListAlt> <h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}> Applied Sellers</h3>  </NavLink></li>
                <li><NavLink to={'balance'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><FaBalanceScale className=" h-5 w-5 text-white"></FaBalanceScale> <h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Balance </h3>  </NavLink></li>
                <li><NavLink to={'sellerOrder'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><VscBook className=" h-5 w-5 text-white"></VscBook><h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}> Orders</h3> </NavLink></li>
                <li><NavLink to={'addProduct'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><MdCreateNewFolder className=" h-5 w-5 text-white"></MdCreateNewFolder><h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Add Product </h3>  </NavLink></li>
                <li><NavLink className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><FaBoxOpen className=" h-5 w-5 text-white"></FaBoxOpen><h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Products</h3></NavLink></li>
                <li><NavLink className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><BsCart4 className=" h-5 w-5 text-white"></BsCart4><h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Cart </h3>  </NavLink></li>
                <li><NavLink className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><FaMoneyCheckAlt className=" h-5 w-5 text-white"></FaMoneyCheckAlt><h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Payments </h3> </NavLink></li>
                <li><NavLink to={'profile'} className={'flex items-center hover:bg-slate-200 rounded-md cursor-pointer p-2 gap-2'}><CgProfile className=" h-5 w-5 text-white"></CgProfile><h3 className={`${open ? 'text-xl text-white font-mono' : 'hidden'}`}>Profile</h3></NavLink></li>
                
                    
                </ul>
            </div>
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;