import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

function Card(props) {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [selectedType, setSelectedType] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const { item } = props;

  const handleIncrease = (item) => {
    const { name } = item;

    switch (name) {
      case "Пепперони Фреш с перцем": {
        return dispatch({
          type: "SET_PEPPER",
          payload: state["Пепперони Фреш с перцем"] + 1,
        });
      }
      case "Сырная": {
        return dispatch({ type: "SET_CHEESE", payload: state["Сырная"] + 1 });
      }
      case "Цыпленок барбекю": {
        return dispatch({
          type: "SET_CHICKEN",
          payload: state["Цыпленок барбекю"] + 1,
        });
      }
      case "Кисло-сладкий цыпленок": {
        return dispatch({
          type: "SET_TASTE_CHICKEN",
          payload: state["Кисло-сладкий цыпленок"] + 1,
        });
      }
      case "Чизбургер-пицца": {
        return dispatch({
          type: "SET_CHEESEBURGER_PIZZA",
          payload: state["Чизбургер-пицца"] + 1,
        });
      }
      case "Крэйзи пепперони": {
        return dispatch({
          type: "SET_CRAZY_PEPPER",
          payload: state["Крэйзи пепперони"] + 1,
        });
      }
      case "Пепперони": {
        return dispatch({
          type: "SET_PEPPER_PIZZA",
          payload: state["Пепперони"] + 1,
        });
      }
      case "Маргарита": {
        return dispatch({
          type: "SET_MARGARITA",
          payload: state["Маргарита"] + 1,
        });
      }
      case "Четыре сезона": {
        return dispatch({
          type: "SET_FOUR_SEASON",
          payload: state["Четыре сезона"] + 1,
        });
      }
      case "Овощи и грибы 🌱": {
        return dispatch({
          type: "SET_VEGETABLES_PIZZA",
          payload: state["Овощи и грибы 🌱"] + 1,
        });
      }
      default: {
        return;
      }
    }
  };

  useEffect(() => {
    if (item.types.includes(0)) {
      return setSelectedType("yupqa");
    } else {
      return setSelectedType("milliy");
    }
  }, [item]);

  useEffect(() => {
    if (item.sizes.includes(0)) {
      return setSelectedSize(26);
    } else if (item.sizes.includes(1)) {
      return setSelectedSize(30);
    } else {
      return setSelectedSize(40);
    }
  }, [item]);

  return (
    <div className="w-1/5 h-auto flex flex-col justify-center items-center">
      <img src={item.imageUrl} className="w-64 h-auto" alt="" />
      <p className="text-base font-bold text-center w-full">{item.name}</p>
      <div className="h-20 w-full bg-gray-100 rounded-xl flex flex-col justify-around mt-4">
        <div className="flex w-full justify-around">
          <div
            className={`w-5/12 text-center h-8 ${
              selectedType === "yupqa" ? "bg-white" : ""
            } flex items-center rounded-lg justify-center cursor-pointer ${
              item.types.includes(0) ? "text-black" : "text-gray-400"
            }`}
            onClick={() => {
              if (item.types.includes(0)) {
                setSelectedType("yupqa");
              }
            }}
          >
            Yupqa
          </div>
          <div
            className={`w-5/12 text-center h-8 ${
              selectedType === "milliy" ? "bg-white" : ""
            } flex items-center rounded-lg justify-center cursor-pointer ${
              item.types.includes(1) ? "text-black" : "text-gray-400"
            }`}
            onClick={() => {
              if (item.types.includes(1)) {
                setSelectedType("milliy");
              }
            }}
          >
            Milliy
          </div>
        </div>
        <div className="flex w-full justify-around px-4">
          <div
            className={`${
              selectedSize === 26 ? "bg-white" : ""
            } px-6 rounded-lg cursor-pointer ${
              item.sizes.includes(26) ? "text-black" : "text-gray-300"
            }`}
            onClick={() => {
              if (item.sizes.includes(26)) {
                setSelectedSize(26);
              }
            }}
          >
            26
          </div>
          <div
            className={`${
              selectedSize === 30 ? "bg-white" : ""
            } px-6 rounded-lg cursor-pointer ${
              item.sizes.includes(30) ? "text-black" : "text-gray-300"
            }`}
            onClick={() => {
              if (item.sizes.includes(30)) {
                setSelectedSize(30);
              }
            }}
          >
            30
          </div>
          <div
            className={`${
              selectedSize === 40 ? "bg-white" : ""
            } px-6 rounded-lg cursor-pointer ${
              item.sizes.includes(40) ? "text-black" : "text-gray-300"
            }`}
            onClick={() => {
              if (item.sizes.includes(40)) {
                setSelectedSize(40);
              }
            }}
          >
            40
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between px-2 mt-2">
        <p>{item.price}₽ dan</p>
        <button
          className="w-32 h-8 flex justify-center items-center text-orange-600 rounded-3xl border border-orange-600 hover:text-white hover:bg-orange-600"
          onClick={() => {
            handleIncrease(item);
          }}
        >
          <FaPlus className="mr-2" />
          Qo'shish
          <p className="ml-2">{state[item.name]}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
