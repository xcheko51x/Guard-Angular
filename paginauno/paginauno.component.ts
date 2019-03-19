import { Component, OnInit } from '@angular/core';
import { SeguridadrutasGuard } from '../seguridadrutas.guard';

@Component({
  selector: 'app-paginauno',
  templateUrl: './paginauno.component.html',
  styleUrls: ['./paginauno.component.css']
})
export class PaginaunoComponent implements OnInit {

  constructor(private seguridad: SeguridadrutasGuard) { }

  ngOnInit() {
    this.leerSesion();
  }

  leerSesion() {
    this.seguridad.leerSesionStorage();
  }
}
