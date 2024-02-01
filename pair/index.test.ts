import { getHelloWorld } from ".";

describe("main", () => {
  it("should return hello world", () => {
    expect(getHelloWorld()).toBe("Hello World!");
  });
});
