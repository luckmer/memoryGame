import React from "react";
import * as M from "../css/gamePanelDesign";

const GameOverPanel = (
  move: number,
  handleRestart: () => void
): React.ReactNode => {
  return (
    <M.GameOverContainer>
      <M.Spacer>
        <M.OverMoves>total moves {move}</M.OverMoves>
      </M.Spacer>
      <M.Spacer>
        <div>
          <M.OverButton onClick={handleRestart}>Restart</M.OverButton>
        </div>
      </M.Spacer>
    </M.GameOverContainer>
  );
};

export default GameOverPanel;
