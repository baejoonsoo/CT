class Dequeue {
  constructor() {
    this._arr = [];
  }

  push_front(item) {
    this._arr.unshift(item);
  }
  push_back(item) {
    this._arr.push(item);
  }

  pop_front() {
    return this._arr.shift();
  }

  pop_back() {
    return this._arr.pop();
  }
}
