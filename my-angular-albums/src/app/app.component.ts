import { Component, OnInit  } from "@angular/core";
import { Album } from "./albums/album.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'my-angular-albums';
  albumsArray: Album[];
  titleCounter = 1;
  numbers: number[];

  ngOnInit(): void {
    this.numbers = [1, 2, 3];




    const interval = setInterval(() => {this.titleCounter++;
      this.numbers.push(4);
      this.numbers = [...this.numbers];}, 2000);


    setTimeout(() => clearInterval(interval), 6000);
  }
}
