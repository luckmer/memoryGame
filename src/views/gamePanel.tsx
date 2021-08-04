import { useState } from "react";
import { mapInterface, imageInterface } from "../interfaces/mapInterface";
import { SetUpdate, ButtonClick } from "../hooks/index";
import { MainGamePanel, GameOverPanel } from "./index";
import * as M from "../css/gamePanelDesign";

const GamePanel = () => {
  const [image, setImage] = useState<imageInterface[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [map, setMap] = useState<mapInterface[]>([]);

  const {
    handleRestart,
    handleClick,
    checkPair,
    setClick,
    setPair,
    click,
    move,
    pair,
  } = ButtonClick();

  SetUpdate(setMap, setImage, click, setPair, setClick, setGameOver, pair);

  return (
    <M.Main>
      <M.Game>
        {!gameOver ? (
          <M.Container>
            <M.Header>
              <div></div>
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
                    checkPair,
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
