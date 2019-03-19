import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaunoComponent } from './paginauno/paginauno.component';
import { SeguridadrutasGuard } from './seguridadrutas.guard';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'paginauno', component: PaginaunoComponent, canActivate: [SeguridadrutasGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
