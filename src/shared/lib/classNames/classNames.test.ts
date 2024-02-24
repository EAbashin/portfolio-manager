import { classNames } from "./classNames";

describe("classNames", () => {
  test("with first param", () => {
    expect(classNames("mainClass")).toBe("mainClass");
  });

  test("with adds params", () => {
    const adds = ["class1", "class2"];
    const expected = "mainClass class1 class2";
    expect(classNames("mainClass", adds)).toBe(expected);
  });

  test("with mods params", () => {
    const mods = { class3: true, class4: false };
    const expected = "mainClass class3";
    expect(classNames("mainClass", [], mods)).toBe(expected);
  });

  test("with all params", () => {
    const adds = ["class1", "class2"];
    const mods = { class3: true, class4: false };
    const expected = "mainClass class1 class2 class3";
    expect(classNames("mainClass", adds, mods)).toBe(expected);
  });
});
