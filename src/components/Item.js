import React, { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import Pizza from "../db/databse.json";

export default function Item(data) {
  const [item, setItem] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const { item } = data;
    setItem(item);
  }, []);

  return (
    <>
      {item ? (
        <>
          <div className="flex justify-between items-center flex-row my-4">
            <div className="flex flex-row items-center">
              <img src={item.imageUrl} alt="" className="w-20 h-20 mr-4" />
              <div className="flex flex-col">
                <h3 className="text-xl">{item.name}</h3>
                <div className="flex flex-row">
                  <p className="text-gray-300 text-base">
                    {item.type} {item.size} sm
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <AiOutlineMinusCircle className="text-2xl text-orange-600" />
              <p className="mx-2 text-xl">{item.count}</p>
              <BsPlusCircle className="text-xl text-orange-600 font-bold" />
            </div>
            <p className="text-xl">{item.prices} ₽</p>
            <MdOutlineCancel
              className="text-2xl text-gray-600 cursor-pointer hover:text-gray-300"
              onClick={() =>
                dispatch({
                  type: "DELETE_PIZZA",
                  payload: {
                    count: 0,
                    name: "",
                    prices: 0,
                    size: 0,
                    imageUrl: "",
                  },
                })
              }
            />
          </div>
          <hr className="w-full" />
        </>
      ) : (
        <p>loading</p>
      )}
    </>
  );
}
