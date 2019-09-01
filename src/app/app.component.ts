import { Component, OnInit } from '@angular/core';
declare const M;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public ngOnInit() {
    this.navbar();
  }
  public navbar() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.sidenav');
      const instances = M.Sidenav.init(elems, Option);
    });
  }
}
