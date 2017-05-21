import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showText = false;
  log = [];
  logCount = 0;
  constructor() { }

  ngOnInit() { }

  toggleDisplay() {
    this.showText = !this.showText;
    this.log.push(this.log.length + 1);
    this.logCount = this.log.length;
  }
}
