import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import Pizza from "./db/databse.json";
import Item from "./components/Item";

function Korzinka() {
  const data = JSON.parse(localStorage.getItem("data"));
  const dispatch = useDispatch();

  useEffect(() => {
    const { pizzas } = Pizza;
    return () => {
      const names = Object.keys(data);
      const values = Object.values(data);

      const arr = [];
      for (let i = 0; i < names.length; i++) {
        arr.push({ name: names[i], count: values[i] });
      }

      // save to redux using switch and dispatch

      arr.forEach((item) => {
        const name = pizzas.find((pizza) => pizza.name === item.name);

        switch (name) {
          case "Пепперони Фреш с перцем": {
            return dispatch({
              type: "SET_PEPPER",
              payload: data["Пепперони Фреш с перцем"],
            });
          }
          case "Сырная": {
            return dispatch({
              type: "SET_CHEESE",
              payload: data["Сырная"],
            });
          }
          case "Цыпленок барбекю": {
            return dispatch({
              type: "SET_CHICKEN",
              payload: data["Цыпленок барбекю"],
            });
          }
          case "Кисло-сладкий цыпленок": {
            return dispatch({
              type: "SET_TASTE_CHICKEN",
              payload: data["Кисло-сладкий цыпленок"],
            });
          }
          case "Чизбургер-пицца": {
            return dispatch({
              type: "SET_CHEESEBURGER_PIZZA",
              payload: data["Чизбургер-пицца"],
            });
          }
          case "Крэйзи пепперони": {
            return dispatch({
              type: "SET_CRAZY_PEPPER",
              payload: data["Крэйзи пепперони"],
            });
          }
          case "Пепперони": {
            return dispatch({
              type: "SET_PEPPER_PIZZA",
              payload: data["Пепперони"],
            });
          }
          case "Маргарита": {
            return dispatch({
              type: "SET_MARGARITA",
              payload: data["Маргарита"],
            });
          }
          case "Четыре сезона": {
            return dispatch({
              type: "SET_FOUR_SEASON",
              payload: data["Четыре сезона"],
            });
          }
          case "Овощи и грибы 🌱": {
            return dispatch({
              type: "SET_VEGETABLES_PIZZA",
              payload: data["Овощи и грибы 🌱"],
            });
          }
          default: {
            return;
          }
        }
      });
    };
  }, [data]);

  return (
    <div className="p-10 h-full w-full bg-yellow-400 flex">
      <div className="h-full w-full bg-white rounded-lg flex justify-center items-center flex-col py-10 min-h-screen">
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
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Korzinka;
