import { useState } from "react";
import {Link} from "react-router-dom"
const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
   
    { title: "Home", src: "../../Images/home.png " },
    { title: "Explore ", src: "../../Images/explore.png" },
    { title: "Subscription", src: "../../Images/subscription.png" },
    { title: "Library", src: "../../Images/library.png" },
    { title: "History", src: "../../Images/history.png" },
   
  ];

  return (
    
      <div
        className={` ${
          open ? " w-2/6 md:w-72" : "w-20 "
        }  bg-white h-screen -rounded-r-xl p-5  pt-8 relative duration-300`}
      >
        <img
        
          src="../../Images/menu.png"
          className={`absolute cursor-pointer  top-9 w-7 
              `}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          
          
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`${open && "flex"} rounded-md p-2 cursor-pointer hover:bg-white text-black text-sm items-center gap-x-4 
              mt-6 `}
            >
              
              <img src={`${Menu.src}`}  className=" h-5 w-5" /> 
              <h4 className={`${open && "hidden"} origin-left duration-200 mt-2 text-center  `}>{Menu.title}</h4>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
    
  );
};
export default SideBar;