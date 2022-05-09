class Stack<T> {
  private items: T[];

  constructor(...data: T[]) {
    this.items = [...data];
  }

  public top(): T | null {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }

  public push(data: T) {
    this.items.push(data);
  }

  public pop(): T {
    const popData = this.items.pop();

    return popData ? popData : null;
  }

  public size(): number {
    return this.items.length;
  }

  public isEmpty(): boolean {
    return !this.items.length;
  }
}
