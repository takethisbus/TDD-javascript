class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  push(item) {
    this.array.push(item);
    return this.array;
  }

  pop() {
    if (!this.array.length) {
      throw new Error("Stack is empty");
    }
    return this.array.pop();
  }

  peek() {
    if (!this.array.length) {
      throw new Error("Stack is empty");
    }
    return this.array[this.size() - 1];
  }
}

module.exports = Stack;
