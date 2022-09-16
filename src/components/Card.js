import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Pizza from "../db/databse.json";

function Card(props) {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const { pizzas } = Pizza;

  const [selectedType, setSelectedType] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const { item } = props;

  const handleIncrease = (item) => {
    const { name } = item;

    switch (name) {
      case "Пепперони Фреш с перцем": {
        return dispatch({
          type: "SET_PEPPER",
          payload: {
            count: state["Пепперони Фреш с перцем"].count + 1,
            name: "Пепперони Фреш с перцем",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Пепперони Фреш с перцем"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Сырная": {
        return dispatch({
          type: "SET_CHEESE",
          payload: {
            count: state["Сырная"].count + 1,
            name: "Сырная",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Сырная"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Цыпленок барбекю": {
        return dispatch({
          type: "SET_CHICKEN",
          payload: {
            count: state["Цыпленок барбекю"].count + 1,
            name: "Цыпленок барбекю",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Цыпленок барбекю"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Кисло-сладкий цыпленок": {
        return dispatch({
          type: "SET_TASTE_CHICKEN",
          payload: {
            count: state["Кисло-сладкий цыпленок"].count + 1,
            name: "Кисло-сладкий цыпленок",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Кисло-сладкий цыпленок"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Чизбургер-пицца": {
        return dispatch({
          type: "SET_CHEESEBURGER_PIZZA",
          payload: {
            count: state["Чизбургер-пицца"].count + 1,
            name: "Чизбургер-пицца",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Чизбургер-пицца"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Крэйзи пепперони": {
        return dispatch({
          type: "SET_CRAZY_PEPPER",
          payload: {
            count: state["Крэйзи пепперони"].count + 1,
            name: "Крэйзи пепперони",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Крэйзи пепперони"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Пепперони": {
        return dispatch({
          type: "SET_PEPPER_PIZZA",
          payload: {
            count: state["Пепперони"].count + 1,
            name: "Пепперони",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Пепперони"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Маргарита": {
        return dispatch({
          type: "SET_MARGARITA",
          payload: {
            count: state["Маргарита"].count + 1,
            name: "Маргарита",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Маргарита"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Четыре сезона": {
        return dispatch({
          type: "SET_FOUR_SEASON",
          payload: {
            count: state["Четыре сезона"].count + 1,
            name: "Четыре сезона",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Четыре сезона"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
        });
      }
      case "Овощи и грибы 🌱": {
        return dispatch({
          type: "SET_VEGETABLES_PIZZA",
          payload: {
            count: state["Овощи и грибы 🌱"].count + 1,
            name: "Овощи и грибы 🌱",
            prices:
              pizzas.find((pizza) => pizza.name === name).price *
              (state["Овощи и грибы 🌱"].count + 1),
            type: selectedType,
            size: selectedSize,
            imageUrl: pizzas.find((pizza) => pizza.name === name).imageUrl,
          },
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
          <p className="ml-2">{state[item.name].count}</p>
        </button>
      </div>
    </div>
  );
}

export default Card;
