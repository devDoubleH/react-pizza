import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Item() {
  const state = useSelector((state) => state.reducer);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return <div>Item</div>;
}
