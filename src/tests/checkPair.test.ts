import { checkPair } from "../hooks/index";

describe("checkPair", () => {
  test("should return true", () => {
    const item = {
      first: 2,
      second: 3,
    };
    const name = 2;
    let open = false;
    const data = checkPair(item, name, open);

    expect(data).toBe(true);
  });

  test("should return false", () => {
    const item = {
      first: 2,
      second: 3,
    };
    const name = 4;
    let open = false;
    const data = checkPair(item, name, open);

    expect(data).toBe(false);
  });

  test("should have possible option", () => {
    const item = {
      first: 2,
      second: 3,
    };
    const name = 0;
    let open = false;
    const data = checkPair(item, name, open);

    expect(data).not.toBe(true);
  });
});
