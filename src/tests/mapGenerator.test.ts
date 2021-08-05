import { mapGenerator } from "../hooks/index";

describe("mapGenerator", () => {
  test("expect map", () => {
    const size = 16;
    const data = mapGenerator(size);

    expect(data).toHaveLength(16);
  });

  test("expect different sizes", () => {
    const size = 20;
    const data = mapGenerator(size);

    expect(data).toHaveLength(20);
  });

  test("expect data", () => {
    const size = 2;
    const data = mapGenerator(size);
    const result = [
      { id: 1, name: 2 },
      { id: 1, name: 3 },
    ];

    expect(data).toEqual(result);
  });

  test("the map should be sized", () => {
    const size = 0;
    const data = mapGenerator(size);
    const result = [
      { id: 1, name: 2 },
      { id: 1, name: 3 },
    ];

    expect(data).not.toHaveLength(1);
  });
});
