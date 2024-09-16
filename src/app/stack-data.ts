import {StackItem} from "./stack-item";

export class StackData {

  private data: string[]  = ["Item 1", "Item 2", "Item 3"];

  push(value: string): void{
    this.data.push(value);
  }

  pop(): string{
    return this.data.pop() ?? "";
  }

  get items(): StackItem[]{
    let values: StackItem[] = [];
    for(let count = this.data.length; count > 0; count--){
      values.push(new StackItem(count, this.data[count - 1]));
    }
    return values;
  }
}
