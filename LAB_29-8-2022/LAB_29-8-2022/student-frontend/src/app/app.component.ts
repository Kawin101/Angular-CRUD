import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-frontend';
  constructor(private router: Router) { }
  openNewStudent() {
    this.router.navigateByUrl('student-add');
  }
  openHome() {
    this.router.navigateByUrl('/');
  }
}
