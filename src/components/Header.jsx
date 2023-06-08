import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(true);
  // Event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-4"
      } fixed w-full z-10 transition-all flex justify-center`}
    >
      <div className="flex container max-auto items-center justify-between h-full ">
        <Link to={"/"}>
          <div>
            <img className="w-[40px] " src={logo} alt="logo" />
          </div>
        </Link>
        <div
          className="flex relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AiOutlineShoppingCart className="text-3xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
