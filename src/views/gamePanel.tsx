import React, { useEffect, useState, useCallback } from "react";
import { shuffle } from "../hooks/index";
import * as M from "../css/gamePanelDesign";

interface mapInterface {
  id: number;
  name: number;
}

interface imageInterface {
  img: string;
  id: number;
}

interface clickInterface {
  id: number;
  name: number;
}

const GamePanel = () => {
  const [map, setMap] = useState<mapInterface[]>([]);
  const [image, setImage] = useState<imageInterface[]>([]);
  const [click, setClick] = useState<clickInterface[]>([]);
  const [move, setMove] = useState<number>(0);

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

  const FetchApi = async (url: string, i: number) => {
    const response = await fetch(url);
    const data = await response.json();
    const img = data.sprites.front_default;
    return {
      img: img,
      id: ~~(i + 1),
    };
  };

  const fetchPosts = useCallback(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
    const data = await response.json();
    const url = data.results.map(({ url }: { url: string }) => url);

    const image = Promise.all(
      url.map((el: string, i: number) => FetchApi(el, i))
    );

    return image;
  }, []);

  useEffect(() => {
    try {
      fetchPosts().then((res) => setImage(res as imageInterface[]));
    } catch (err) {
      throw err;
    }
  }, [fetchPosts]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    let button = event.target as HTMLInputElement;
    const id = Number(button.dataset.id);
    const name = Number(button.dataset.user);

    const check = click.every((click) => click.name !== name);

    if (check && !isNaN(name)) {
      setClick([...click, { id, name }]);
      setMove(() => move + 1);
    }
  };

  return (
    <M.Main>
      <M.Container>
        {image.length > 0 &&
          map.map(({ id, name }: { id: number; name: number }, i) => {
            let open = false;
            const imgView = image.find((el: { id: number }) => el.id === id);
            const find = click.find((el) => el.name === name);
            if (find) open = true;

            console.log(open);

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
          })}
      </M.Container>
    </M.Main>
  );
};

export default GamePanel;
