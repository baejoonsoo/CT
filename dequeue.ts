class Dequeue<T> {
  private list: T[] = [];

  constructor(list: T[]) {
    this.list = [...list];
  }

  push_front(item: T): void {
    this.list.unshift(item);
  }
  push_back(item: T): void {
    this.list.push(item);
  }

  pop_front(): T {
    return this.list.shift();
  }

  pop_back(): T {
    return this.list.pop();
  }
}
