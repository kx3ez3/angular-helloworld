import { Component } from '@angular/core';
import { ClassRoutes } from "./app-routing.module";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = new ClassRoutes();
  title = 'my-app';
  routes = this.a.routes;
}