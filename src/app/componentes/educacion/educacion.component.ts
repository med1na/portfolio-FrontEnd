import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  educaciones: Educacion[] = [];

  constructor(private sEducacion: EducacionService) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.educaciones = data;
    });
  }

  borrar(ideducacion: number) {
    if (ideducacion != undefined) {
      this.sEducacion.delete(ideducacion).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          window.location.reload();
        }
      );
    }
  }
}
