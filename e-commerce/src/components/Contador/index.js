import React from "react";
import {useState} from "react";

import "./index.css"
export default function Item(props) {
  const [quantidade, setQuantidade] = useState(1);

  const add = () => {
    setQuantidade(quantidade + 1)
  };

  const remove = () => {
    if (quantidade === 0) {
      return;
    }

    setQuantidade(quantidade - 1);
  };

  return (
    <div>
      <button className="botao" onClick={remove} >-</button>
        {quantidade}
      <button className="botao" onClick={add}>+</button>
    </div>
  );
}
