import { useState, useEffect } from "react";
import Pizza from "./db/databse.json";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Card from "./components/Card";

function App() {
  const [all, setAll] = useState([]);
  const [item, setItem] = useState("");

  const filterItems = ["Mashxurlik", "Narx bo'yicha", "Alfavit bo'yicha"];

  useEffect(() => {
    setAll(Pizza.pizzas);
  }, []);

  const selectItem = (item) => {
    console.log(item);
  };

  const LinkToggle = (item) => {
    setItem(item);
  };

  return (
    <div className="p-10 h-full w-full bg-yellow-400 flex">
      <div className="h-full w-full bg-white rounded-lg flex justify-center items-center flex-col py-10">
        <Header />
        <div className="w-11/12 flex justify-between mt-4">
          <ul className="flex justify-evenly items-center w-9/12 ">
            <li>
              <Link
                to="#hammasi"
                className={`w-auto h-9 ${
                  item === "hammasi" ? "bg-black" : "bg-gray-300"
                } flex justify-center items-center px-4 ${
                  item === "hammasi" ? "text-white" : "text-black"
                } rounded-3xl text-base`}
                onClick={() => {
                  LinkToggle("hammasi");
                }}
              >
                Hammasi
              </Link>
            </li>
            <li>
              <Link
                to="#goshtli"
                className={`w-auto h-9 ${
                  item === "goshtli" ? "bg-black" : "bg-gray-300"
                } flex justify-center items-center px-4 ${
                  item === "goshtli" ? "text-white" : "text-black"
                } rounded-3xl text-base`}
                onClick={() => {
                  LinkToggle("goshtli");
                }}
              >
                Go'shtli
              </Link>
            </li>
            <li>
              <Link
                to="#vegetarian"
                className={`w-auto h-9 ${
                  item === "vegetarian" ? "bg-black" : "bg-gray-300"
                } flex justify-center items-center px-4 ${
                  item === "vegetarian" ? "text-white" : "text-black"
                } rounded-3xl text-base`}
                onClick={() => {
                  LinkToggle("vegetarian");
                }}
              >
                Vegetarian
              </Link>
            </li>
            <li>
              <Link
                to="#tandir"
                className={`w-auto h-9 ${
                  item === "tandir" ? "bg-black" : "bg-gray-300"
                } flex justify-center items-center px-4 ${
                  item === "tandir" ? "text-white" : "text-black"
                } rounded-3xl text-base`}
                onClick={() => {
                  LinkToggle("tandir");
                }}
              >
                Tandir
              </Link>
            </li>
            <li>
              <Link
                to="#achchiq"
                className={`w-auto h-9 ${
                  item === "achchiq" ? "bg-black" : "bg-gray-300"
                } flex justify-center items-center px-4 ${
                  item === "achchiq" ? "text-white" : "text-black"
                } rounded-3xl text-base`}
                onClick={() => {
                  LinkToggle("achchiq");
                }}
              >
                Achchiq
              </Link>
            </li>
            <li>
              <Link
                to="#mavjudemas"
                className={`w-auto h-9 ${
                  item === "mavjudemas" ? "bg-black" : "bg-gray-300"
                } flex justify-center items-center px-4 ${
                  item === "mavjudemas" ? "text-white" : "text-black"
                } rounded-3xl text-base`}
                onClick={() => {
                  LinkToggle("mavjudemas");
                }}
              >
                Mavjud emas
              </Link>
            </li>
          </ul>

          <div className="flex justify-center items-center">
            <AiFillCaretUp className="text-lg mr-2" />
            <p className="text-base font-bold mr-4">Filter:</p>
            <Dropdown
              options={filterItems}
              onChange={selectItem}
              value={filterItems[0]}
              placeholder="Tanlang"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full justify-center items-center gap-10 p-10">
          {all && all.map((i, key) => <Card item={i} key={key} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
