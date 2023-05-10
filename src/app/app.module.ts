import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PersonalComponent } from './componentes/personal/personal.component';
import { LaboralComponent } from './componentes/laboral/laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { PersonaService } from './servicios/persona.service';
import { HabilidadComponent } from './componentes/habilidad/habilidad.component';
import { ModalLaboralAddComponent } from './modales/modal-laboral-add/modal-laboral-add.component';
import { ModalHabilidadAddComponent } from './modales/modal-habilidad-add/modal-habilidad-add.component';
import { ModalLaboralEditarComponent } from './modales/modal-laboral-editar/modal-laboral-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonalComponent,
    LaboralComponent,
    EducacionComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    HabilidadComponent,
    ModalLaboralAddComponent,
    ModalHabilidadAddComponent,
    ModalLaboralEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    PortfolioService,
    PersonaService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
