import { useState } from "react";
import { SetUpdate } from "../hooks/index";
import { MainGamePanel, GameOverPanel } from "./index";
import * as M from "../css/gamePanelDesign";
import {
  mapInterface,
  imageInterface,
  clickInterface,
  pairInterface,
} from "../interfaces/mapInterface";

const GamePanel = () => {
  const [image, setImage] = useState<imageInterface[]>([]);
  const [click, setClick] = useState<clickInterface[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [pair, setPair] = useState<pairInterface[]>([]);
  const [map, setMap] = useState<mapInterface[]>([]);
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

  SetUpdate(setMap, setImage, click, setPair, setClick, setGameOver, pair);

  return (
    <M.Main>
      <M.Game>
        {!gameOver ? (
          <M.Container>
            <M.Header>
              <div>
                total moves <span>{move}</span>
              </div>
            </M.Header>
            <M.Container>
              {map.length > 0 &&
                map.map(({ id, name }: { id: number; name: number }, i) => {
                  return MainGamePanel({
                    image,
                    id,
                    click,
                    name,
                    pair,
                    i,
                    handleClick,
                  });
                })}
            </M.Container>
          </M.Container>
        ) : (
          GameOverPanel(move, handleRestart)
        )}
      </M.Game>
    </M.Main>
  );
};

export default GamePanel;
