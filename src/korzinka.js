import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import Item from "./components/Item";

function Korzinka() {
  const state = useSelector((state) => state.reducer);
  const [values, setValues] = useState([]);

  useEffect(() => {
    let arr = Object.values(state);

    let orderedPizzas = arr.filter((item) => item.count > 0);

    setValues(orderedPizzas);
  }, [state]);

  return (
    <div className="p-10 h-full w-full bg-yellow-400 flex">
      <div className="h-full w-full bg-white rounded-lg flex justify-start items-center flex-col py-10 min-h-screen">
        <Header />
        <div className="w-2/3  h-2/3">
          <div className="w-full h-20 flex justify-between items-center">
            <p className="font-bold text-black text-xl flex items-center cursor-pointer">
              <FiShoppingCart className="mr-2" /> Savatcha
            </p>
            <p className="font-bold text-gray-300 text-base flex items-center cursor-pointer">
              <FaRegTrashAlt className="mr-2" /> Savatchani tozalash
            </p>
          </div>
          <hr className="w-full h-px bg-gray-300" />
          <div className="w-full h-5/6 flex flex-col justify-between">
            {values &&
              values.map((item, index) => {
                return <Item item={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;
