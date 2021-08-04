import * as M from "../css/gamePanelDesign";
import { MainGameInterface } from "../interfaces/mapInterface";

const MainGamePanel = (props: MainGameInterface) => {
  const { image, id, click, name, pair, checkPair, i, handleClick } = props;
  let open = false;

  const imgView = image.find((el: { id: number }) => el.id === id);
  const find = click.find((el) => el.name === name);

  if (find) open = true;

  if (pair) {
    pair.filter((item) => {
      open = checkPair(item, name, open);
      return item;
    });
  }

  return (
    <M.Card key={i}>
      <M.Inner>
        <M.Display Open={open}>
          <img
            src={`${imgView && imgView.img}`}
            alt={`${imgView && imgView.img}`}
            width="100%"
          />
        </M.Display>
        <M.Back
          Open={open}
          id={id.toString()}
          data-id={id}
          data-user={name}
          onClick={handleClick}
        />
      </M.Inner>
    </M.Card>
  );
};

export default MainGamePanel;
