import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIcon } from "@angular/material/icon";
import { Navbar } from './layout/navbar/navbar';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('test');

}
