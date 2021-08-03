import { useEffect, useState } from "react";
import { shuffle } from "../hooks/index";
import styled from "styled-components";

interface mapInterface {
  id: number;
  name: number;
}

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const GamePanel = () => {
  const [map, setMap] = useState<mapInterface[]>([]);

  useEffect(() => {
    const size: number = 16;

    const generator = [...Array(size)].map((_, i: number) => {
      const apiId = ~~(i / 2) + 1;

      return {
        id: apiId,
        name: ~~(i + 2),
      };
    });

    const mapResult = shuffle(generator);
    setMap(mapResult);
  }, []);

  console.log(map);

  return <Main></Main>;
};

export default GamePanel;
