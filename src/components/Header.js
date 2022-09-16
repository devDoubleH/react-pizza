import React from "react";
import Logo from "../assets/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import Pizza from "../db/databse.json";
import { useNavigate } from "react-router-dom";

function Header() {
  const state = useSelector((state) => state.reducer);

  const navigate = useNavigate();

  const [allCount, setAllCount] = React.useState(0);
  const [allPrice, setAllPrice] = React.useState(0);

  React.useEffect(() => {
    const { pizzas } = Pizza;

    // object to array
    const names = Object.keys(state);
    const values = Object.values(state);

    let count = 0;
    let price = 0;

    for (let i = 0; i < names.length; i++) {
      count += values[i].count;
      price += values[i].prices;
    }

    setAllCount(count);
    setAllPrice(price);
  }, [state]);

  return (
    <>
      <header className="flex justify-between px-10 items-center w-5/6 self-center">
        <div className="flex items-center">
          <img src={Logo} className="w-10 h-10 mr-4" alt="" />
          <div className="flex-col">
            <h1 className="text-black text-xl font-bold uppercase">
              React Pizza
            </h1>
            <p className="text-gray-300 text-base">
              Dunyodagi eng shirin pitsalar
            </p>
          </div>
        </div>
        <div
          className="w-52 h-12 rounded-xl bg-orange-400 flex justify-around items-center cursor-pointer hover:bg-orange-500"
          onClick={() => navigate("/korzinka")}
        >
          <p className="text-white text-2xl">{allPrice} ₽</p>
          <hr className="w-px h-8 bg-white"></hr>
          <FiShoppingCart className="w-8 h-8 text-white" />
          <p className="text-white font-bold mr-4 text-xl">{allCount}</p>
        </div>
      </header>
      <hr className="bg-gray-300 w-11/12 h-px mt-10"></hr>
    </>
  );
}

export default Header;
