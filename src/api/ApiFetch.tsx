export class ApiFetch {
  FetchApi = async (url: string, i: number) => {
    const response = await fetch(url);
    const data = await response.json();
    const img = data.sprites.front_default;
    return {
      img: img,
      id: ~~(i + 1),
    };
  };

  fetchPosts = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=8");
    const data = await response.json();

    const url = data.results.map(({ url }: { url: string }) => url);

    const image = Promise.all(
      url.map((el: string, i: number) => this.FetchApi(el, i))
    );

    return image;
  };
}
