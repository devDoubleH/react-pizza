import React from "react";
import Logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <>
      <header className="flex justify-between px-10 items-center w-5/6 self-center">
        <div className="flex items-center">
          <img src={Logo} className="w-10 h-10 mr-4" />
          <div className="flex-col">
            <h1 className="text-black text-xl font-bold uppercase">
              React Pizza
            </h1>
            <p className="text-gray-300 text-base">
              Dunyodagi eng shirin pitsalar
            </p>
          </div>
        </div>
        <div className="w-52 h-12 rounded-xl bg-orange-400 flex justify-around items-center cursor-pointer hover:bg-orange-500">
          <p className="text-white text-2xl">520 ₽</p>
          <hr className="w-px h-8 bg-white"></hr>
          <FiShoppingCart className="w-8 h-8 text-white" />
        </div>
      </header>
      <hr className="bg-gray-300 w-11/12 h-px mt-10"></hr>
    </>
  );
}

export default Header;
