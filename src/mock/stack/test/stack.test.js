const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("first");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throw an error if stack is empty", () => {
      expect(() => stack.pop()).toThrow("Stack is empty");
    });

    it("returns last pushed item and removes it from stack", () => {
      stack.push("first");
      stack.push("second");
      expect(stack.pop()).toBe("second");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throw an error if stack is empty", () => {
      expect(() => stack.peek()).toThrow("Stack is empty");
    });

    it("returns the last pushed item but keeps it in the stack", () => {
      stack.push("first");
      stack.push("second");
      expect(stack.peek()).toBe("second");
      expect(stack.size()).toBe(2);
    });
  });
});
