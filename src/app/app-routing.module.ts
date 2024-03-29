import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { ModalLaboralEditarComponent } from './modales/modal-laboral-editar/modal-laboral-editar.component';
import { ModalEducacionEditarComponent } from './modales/modal-educacion-editar/modal-educacion-editar.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: 'editandoExpLaboral/:id', component: ModalLaboralEditarComponent },
  { path: 'editandoEducacion/:id', component: ModalEducacionEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
