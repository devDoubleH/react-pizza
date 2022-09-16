import { useState, useEffect } from "react";
import Pizza from "./db/databse.json";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { AiFillCaretUp } from "react-icons/ai";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Card from "./components/Card";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const [all, setAll] = useState([]);
  const [item, setItem] = useState("");

  const filterItems = ["Mashxurlik", "Narx bo'yicha", "Alfavit bo'yicha"];

  const navigate = useNavigate();

  useEffect(() => {
    setAll(Pizza.pizzas);
    setItem("hammasi");
    navigate("#hammasi", { replace: false });
  }, []);

  const selectItem = (item) => {
    if (item.value === "Mashxurlik") {
      navigate("#mashxurlik", { replace: false });
    } else if (item.value === "Narx bo'yicha") {
      navigate("#narx", { replace: false });
    } else if (item.value === "Alfavit bo'yicha") {
      navigate("#alfavit", { replace: false });
    }
  };

  const location = useLocation();

  const LinkToggle = (item) => {
    setItem(item);
  };

  useEffect(() => {
    if (location.hash === "#hammasi") {
      setAll(Pizza.pizzas);
    } else if (location.hash === "#mashxurlik") {
      setItem("hammasi");
      setAll(Pizza.pizzas.sort((a, b) => b.rating - a.rating));
    } else if (location.hash === "#narx") {
      setItem("hammasi");
      setAll(Pizza.pizzas.sort((a, b) => a.price - b.price));
    } else if (location.hash === "#alfavit") {
      setItem("hammasi");
      setAll(Pizza.pizzas.sort((a, b) => a.name.localeCompare(b.name)));
    } else if (location.hash === "#goshtli") {
      setAll(Pizza.pizzas.filter((item) => item.category === 1));
    } else if (location.hash === "#vegetarian") {
      setAll(Pizza.pizzas.filter((item) => item.category === 2));
    } else if (location.hash === "#tandir") {
      setAll(Pizza.pizzas.filter((item) => item.category === 3));
    } else if (location.hash === "#achchiq") {
      setAll(Pizza.pizzas.filter((item) => item.category === 4));
    } else if (location.hash === "#mavjudemas") {
      setAll(Pizza.pizzas.filter((item) => item.category === 5));
    }
  }, [location]);

  return (
    <div className="p-10 h-full w-full bg-yellow-400 flex">
      <div className="h-full w-full bg-white rounded-lg flex justify-start items-center flex-col py-10 min-h-screen">
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
        <div className="flex flex-wrap w-full justify-center items-start gap-10 p-10">
          {all && all.map((i, key) => <Card item={i} key={key} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
