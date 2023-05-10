import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.css'],
})
export class HabilidadComponent implements OnInit {
  habilidades: Habilidad[] = [];

  constructor(private sHabilidad: HabilidadService) {}

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  cargarHabilidad(): void {
    this.sHabilidad.lista().subscribe((data) => {
      this.habilidades = data;
    });
  }
}
