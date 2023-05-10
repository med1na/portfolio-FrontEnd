import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private sPersona: PersonaService) {}

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.sPersona.lista().subscribe((data) => {
      this.personas = data;
    });
  }
}
