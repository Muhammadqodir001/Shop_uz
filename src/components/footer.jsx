import React, {useState} from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTelegram} from "react-icons/fa";




const Footer =()=>{
         const [email, setEmail] = useState("");

         const handleInputChange = (event) => {
             setEmail(event.target.value);
         };

    return (
        <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
          <div className="max-w-[1400px] mx-auto  grid grid-cols-2 md:grid-cols-6 
          border-b-2 border-gray-600 py-8 px-4 ">
           
           <div>
               <h6 className="font-bold uppercase ">Contact Us</h6>
               <ul>
                   <li className="py-1">(77) 777-67-77</li>
                   <li className="py-1"> Or get in touch via email address</li>
                   <li className="py-1">uz_internetShop@777gmail.com</li>
               </ul>
           </div>
           
            <div className="md:ml-10 ml-[100px]">
                  <h6 className="font-bold uppercase ">Solutions</h6>
                  <ul>
                      <li className="py-1">Discount</li>
                      <li className="py-1">Presents</li>
                      <li className="py-1">Flights</li>
                      <li className="py-1">Ground</li>
                  </ul>
             </div>
              
              <div>
                   <h6 className="font-bold uppercase">Company</h6>
                    <ul>
                       <li className="py-1">About</li>
                       <li className="py-1">Jobs</li>
                       <li className="py-1">Press</li>
                       <li className="py-1">Partners</li>
                       <li className="py-1"></li>
                    </ul>
              </div>
              <div className=" md:ml-0 ml-[100px]">
                   <h6 className="font-bold uppercase">Legal</h6>
                    <ul>
                       <li className="py-1">Claims</li>
                       <li className="py-1">Privacy</li>
                       <li className="py-1">Terms</li>
                       <li className="py-1">Policies</li>
                       <li className="py-1"></li>
                    </ul>
              </div>
              <div className="col-span-2 py-8 md:pt-2">
                   <p className="font-bold uppercase ">Subscribe to our official website</p>
                   <p className="py-4">The Latest products, and news sent to your inbox weekly. </p>
                   <form className="flex flex-col sm:flex-row">
                           <input className="w-full p-2 mr-4 rounded-md mb-4 " type="email" placeholder='Enter email..'
                             value={email}
                             onChange={handleInputChange}
                             style={{ color: 'black' }} />
                           <button className="p-2 mb-4 rounded-md">Subscribe</button>
                   </form>
              </div>

         </div>
         
         <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500 ">
            <p className="py-4"> Uz Internet Shop 2023 LLC. All rights reserverd.</p>
            <div className="flex justify-between sm:w-[300px] pt-4 text-2xl ">
                 <FaFacebook className="hover:text-white" />
                 <FaInstagram  className="hover:text-white" />
                 <FaTwitter className="hover:text-white"  />
                 <FaTelegram className="hover:text-white"  size={30} />

           </div>
         </div>
        </div>
    );
};

export default Footer;