const Calculator2 = require("./index");

describe("Operations", () => {
  test("sum", () => {
    expect(Calculator2(2, 3, "+")).toBe(5);
  });
  test("subtraction", () => {
    expect(Calculator2(10, 5, "-")).toBe(5);
  });
  test("multiplication", () => {
    expect(Calculator2(10, 5, "*")).toBe(50);
  });
  test("division", () => {
    expect(Calculator2(10, 5, "/")).toBe(2);
  });
  test("incorrect", () => {
    expect(Calculator2(10, 0, "7")).toBe("Неверная операция");
  });
  test("with fractional numbers", () => {
    expect(Calculator2(0.1, 0.2, "+")).toBeGreaterThan(0.3);
  });
  test("negative values", () => {
    expect(Calculator2(10, 100, "-")).toBe(-90);
  });
  test("division by 0", () => {
    expect(Calculator2(10, 0, "/")).toBe(Infinity);
  });
});
