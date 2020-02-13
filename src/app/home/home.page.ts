import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  test = "Hello";
  tasks = ["Hello123", "Hello1234"];

  constructor() {}

  public addTask() {
    this.test = "Hi";
    console.log("I Added it");
  }
}
