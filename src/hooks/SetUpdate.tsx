import React, { useEffect } from "react";
import { shuffle, mapGenerator } from "./index";
import { ApiFetch } from "../api/ApiFetch";
import {
  mapInterface,
  imageInterface,
  clickInterface,
  pairInterface,
} from "../interfaces/mapInterface";

const SetUpdate = (
  setMap: React.Dispatch<React.SetStateAction<mapInterface[]>>,
  setImage: React.Dispatch<React.SetStateAction<imageInterface[]>>,
  click: clickInterface[],
  setPair: React.Dispatch<React.SetStateAction<pairInterface[]>>,
  setClick: React.Dispatch<React.SetStateAction<clickInterface[]>>,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
  pair: pairInterface[]
) => {
  useEffect(() => {
    const size: number = 16;

    const generator = mapGenerator(size);
    const mapResult = shuffle(generator);

    setMap(mapResult);
  }, [setMap]);

  useEffect(() => {
    try {
      const Api = new ApiFetch();

      Api.fetchPosts().then((res) => setImage(res as imageInterface[]));
    } catch (err) {
      throw err;
    }
  }, [setImage]);

  useEffect(() => {
    if (click.length < 2) return;

    const [one, two] = click;

    if (one && two && one.id === two.id) {
      const pair = { first: one.name, second: two.name };

      setPair((prev) => [...prev, pair]);
    }
  }, [click, setPair]);

  useEffect(() => {
    if (click.length < 2) return;

    setTimeout(() => setClick([]), 500);
  }, [click, setClick]);

  useEffect(
    () => setGameOver(pair.length === 8 ? true : false),
    [pair, setGameOver]
  );
};

export default SetUpdate;
