import React, { useState } from "react";
import { clickInterface, pairInterface } from "../interfaces/mapInterface";

const ButtonClick = () => {
  const [pair, setPair] = useState<pairInterface[]>([]);
  const [click, setClick] = useState<clickInterface[]>([]);
  const [move, setMove] = useState<number>(0);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    let button = event.target as HTMLInputElement;
    const id = Number(button.dataset.id);
    const name = Number(button.dataset.user);

    const check = click.every((click) => click.name !== name);

    if (check && !isNaN(name) && click.length < 2) {
      setClick([...click, { id, name }]);
      setMove(() => move + 1);
    }
  };

  const handleRestart = () => {
    setPair([]);
    setMove(0);
  };

  const checkPair = (item: pairInterface, name: number, open: boolean) => {
    if (Number(item.first === name) || Number(item.second === name)) {
      open = true;
    }
    return open;
  };

  return {
    handleRestart,
    handleClick,
    checkPair,
    setClick,
    setPair,
    click,
    move,
    pair,
  };
};
export default ButtonClick;
