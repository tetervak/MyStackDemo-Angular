import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {StackData} from "./stack-data";
import {StackItem} from "./stack-item";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private stackData: StackData = new StackData();
  stackItems: StackItem[] = this.stackData.items;
  inputValue: string = "";

  onPush(): void{
    this.stackData.push(this.inputValue);
    this.stackItems = this.stackData.items;
  }

  onPop(): void{
    this.inputValue = this.stackData.pop();
    this.stackItems = this.stackData.items;
  }

}
