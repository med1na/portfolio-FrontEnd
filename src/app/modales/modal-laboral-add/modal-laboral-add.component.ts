import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';

@Component({
  selector: 'app-modal-laboral-add',
  templateUrl: './modal-laboral-add.component.html',
  styleUrls: ['./modal-laboral-add.component.css'],
})
export class ModalLaboralAddComponent implements OnInit {
  form: FormGroup;
  idtrabajo = 0;
  nombre_trabajo = '';
  nombre_empresa = '';
  fecha_inicio = '';
  fecha_fin = '';
  descripcion = '';

  constructor(
    formBuilder: FormBuilder,
    private laboralService: LaboralService
  ) {
    //Se crea el grupo de controles para el formulario
    this.form = formBuilder.group({
      nombre_trabajo: ['', [Validators.required]],
      nombre_empresa: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  //Para las validaciones
  get NombreT() {
    return this.form.get('nombre_trabajo');
  }

  get NombreE() {
    return this.form.get('nombre_empresa');
  }

  get FechaI() {
    return this.form.get('fecha_inicio');
  }

  get FechaF() {
    return this.form.get('fecha_fin');
  }

  get DescripcionT() {
    return this.form.get('descripcion');
  }

  //Validaciones
  get NombreValidT() {
    return this.NombreT?.touched && !this.NombreT.valid;
  }

  get NombreValid() {
    return this.NombreE?.touched && !this.NombreE.valid;
  }

  get fechaIValid() {
    return this.FechaI?.touched && !this.FechaI.valid;
  }

  get fechaFValid() {
    return this.FechaF?.touched && !this.FechaF.valid;
  }

  get descripcionValid() {
    return this.DescripcionT?.touched && !this.DescripcionT.valid;
  }

  onCreate(event: Event): void {
    const labo = new Laboral(
      this.idtrabajo,
      this.nombre_trabajo,
      this.nombre_empresa,
      this.fecha_inicio,
      this.fecha_fin,
      this.descripcion
    );
    this.laboralService.save(labo).subscribe(
      (data) => {
        //alert("Experiencia laboral añadida!");
        window.location.reload();
      },
      (err) => {
        alert('Error al guardar la experiencia laboral');
        this.form.reset();
      }
    );
  }

  limpiar(): void {
    this.form.reset();
  }
}
