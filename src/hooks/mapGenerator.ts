const MapGenerate = (size: number) => {
  return [...Array(size)].map((_, i: number) => {
    const apiId = ~~(i / 2) + 1;

    return { id: apiId, name: ~~(i + 2) };
  });
};

export default MapGenerate;
