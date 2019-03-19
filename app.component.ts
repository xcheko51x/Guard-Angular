import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
    this.guardarSesionStorage();
  }

  guardarSesionStorage() {
    sessionStorage.setItem("sesion", "true");
  }
}
