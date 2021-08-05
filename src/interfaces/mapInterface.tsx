import React from "react";

export interface mapInterface {
  id: number;
  name: number;
}
export interface imageInterface {
  img: string;
  id: number;
}
export interface clickInterface {
  id: number;
  name: number;
}
export interface pairInterface {
  first: number;
  second: number;
}

export interface MainGameInterface {
  image: imageInterface[];
  id: number;
  click: clickInterface[];
  name: number;
  pair: pairInterface[];
  i: number;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
}
