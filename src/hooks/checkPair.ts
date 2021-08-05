import { pairInterface } from "../interfaces/mapInterface";

const checkPair = (item: pairInterface, name: number, open: boolean) => {
  if (Number(item.first === name) || Number(item.second === name)) {
    open = true;
  }
  return open;
};

export default checkPair;
