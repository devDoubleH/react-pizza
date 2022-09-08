import React, { useEffect, useState } from "react";

function Card() {
  const [disabled, setDisabled] = useState();
  const [distype, setDistype] = useState();
  const [type, setType] = useState("");

  const [seletedType, setSelectedType] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const item = {
    id: 0,
    imageUrl:
      "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    name: "Пепперони Фреш с перцем",
    types: [0, 1],
    sizes: [26, 30, 40],
    price: 803,
    category: 0,
    rating: 4,
  };

  const arrayCompare = (_default, _arr, str) => {
    let _disabled = [];
    for (let i = 0; i < _default.length; i++) {
      if (_arr.includes(_default[i]) === false) {
        _disabled.push(_default[i]);
      }
    }
    str === "type" ? setDistype(_disabled) : setDisabled(_disabled);
  };

  useEffect(() => {
    arrayCompare([26, 30, 40], item.sizes, "size");
    arrayCompare([0, 1], item.types, "type");
  }, []);

  return (
    <div className="w-1/5 h-auto flex flex-col justify-center items-center">
      <img src={item.imageUrl} className="w-64 h-auto" />
      <p className="text-base font-bold text-center w-full">{item.name}</p>
      <div className="h-20 w-full bg-gray-100 rounded-xl flex flex-col justify-around">
        <div className="flex w-full justify-around">
          <div
            className={`w-5/12 text-center h-8 ${
              distype.includes(0) ? null : "bg-white"
            } flex items-center rounded-lg justify-center`}
          >
            Yupqa
          </div>
          <div
            className={`w-5/12 text-center h-8 
              ${distype.includes(1) ? null : "bg-white"}
          flex items-center rounded-lg justify-center`}
          >
            Milliy
          </div>
        </div>
        <div className="flex w-full justify-around">
          <div className="bg-white px-8 rounded-lg">{item.sizes[0]}</div>
          <div className="bg-white px-8 rounded-lg">{item.sizes[1]}</div>
          <div className="bg-white px-8 rounded-lg">{item.sizes[2]}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
