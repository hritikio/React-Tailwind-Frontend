import {useState} from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar=()=>{
    const [nav,Setnav]=useState(true); //make false afterwards

    const handlenav=()=>{
        Setnav(!nav);
    }


    return (
      <div className=" flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="text-3xl text-[#00df9a]">REACT</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home </li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>

        <div onClick={handlenav} className="block md:hidden" >{!nav ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}</div>

        <div className={!nav?"fixed left-0 top-0 w-[60%] h-full border-r  border-gray-700 bg-[#000300] ease-in-out duration-500 md:hidden":"fixed left-[-100%]"}>
          <h1 className=" text-3xl text-[#00df9a] m-4">REACT</h1>
          <ul className=" uppercase w-[90%]">
            <li className="p-4 border-b border-gray-600  ">Home </li>
            <li className="p-4 border-b border-gray-600  ">Company</li>
            <li className="p-4 border-b border-gray-600  ">Resources</li>
            <li className="p-4 border-b border-gray-600  ">About</li>
            <li className="p-4">Contact</li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar;