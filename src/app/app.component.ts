import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
 
  title = "RunningText";
  Text: string = "";
  speed: number = 1;
  b: boolean = true;
  documentation: boolean = false;
  docText = "Показать документацию";

  Change() {
    var a = document.getElementById("focus");
    a.focus();

    this.b = !this.b;
    setTimeout(() => {
      this.b = !this.b;
    }, 100);
  }

  ChangeDocStatus() {
    var a = document.getElementById("focus");
    a.focus();
    this.documentation = !this.documentation;
    this.docText = this.documentation
      ? "Скрыть документацию"
      : "Показать документацию";
  }
}
