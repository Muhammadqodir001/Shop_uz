import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart,FaPhone, FaTimes} from 'react-icons/fa'
import {CgMenuLeft} from 'react-icons/cg'

export const Navbar = () => {
  
 const [nav, setnav] = useState(false);
 const handleNav = () => setnav(!nav);

  return (
    <div className="  w-full h-[100px] items-center flex justify  bg-gray-400">
      
      <ul className="hidden md:flex ml-[1350px] text-xl mr-[10px] space-x-10  text-black ">

      <li className="hover:scale-110 duration-500 hover: ">
        <NavLink  to="/"> Home </NavLink>
        </li>
       
        <li className="hover:scale-110  duration-500 ">
          <NavLink to="/cart"> <FaShoppingCart size={52} /></NavLink>
        </li>
      </ul>

      <div onClick={handleNav} className="md:hidden px-2 text-4xl z-10 cursor-pointer ">
         {!nav ? <CgMenuLeft /> : <FaTimes className="ml-[250px] text-3xl mt-[-40px]" />}
      </div>
      
      
     {nav ? (
       <ul className=" md:hidden absolute  top-0 bg-white w-[300px] h-screen flex-col flex justify-center items-center duration-300">

         <li className='py-6 text-4xl'>
           <NavLink onClick={handleNav} to='/'  duration={900}>
            Shop
           </NavLink> 
         </li>
    
         <li className='mt-[-20px] flex py-12 text-2xl'>
             
             <FaPhone className="text-green-500 " size={35}/> (77) 777-67-77
         </li>
        
       </ul>
     ) : null}
           
    </div>
  );
};
export default Navbar;


    
  
  