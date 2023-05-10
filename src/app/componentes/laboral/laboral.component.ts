import { Component, OnInit } from '@angular/core';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css'],
})
export class LaboralComponent implements OnInit {
  laborales: Laboral[] = [];

  constructor(private sLaboral: LaboralService) {}

  ngOnInit(): void {
    this.cargarLaboral();
  }

  cargarLaboral(): void {
    this.sLaboral.lista().subscribe((data) => {
      this.laborales = data;
    });
  }

  borrar(idtrabajo: number) {
    console.log('El valor de idtrabajo es:', idtrabajo);
    if (idtrabajo != undefined) {
      this.sLaboral.delete(idtrabajo).subscribe(
        (data) => {
          this.cargarLaboral();
        },
        (err) => {
          window.location.reload();
        }
      );
    }
  }
}
