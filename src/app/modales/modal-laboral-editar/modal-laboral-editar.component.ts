import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Laboral } from 'src/app/model/laboral';
import { LaboralService } from 'src/app/servicios/laboral.service';

@Component({
  selector: 'app-modal-laboral-editar',
  templateUrl: './modal-laboral-editar.component.html',
  styleUrls: ['./modal-laboral-editar.component.css'],
})
export class ModalLaboralEditarComponent implements OnInit {
  form: FormGroup;
  laboral: Laboral = new Laboral(0, '', '', '', '', '');

  constructor(
    private formBuilder: FormBuilder,
    private laboralService: LaboralService,
    private activatedRoute: ActivatedRoute,
    private ruta: Router
  ) {
    //Se crea el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      idtrabajo: [''],
      nombre_trabajo: ['', [Validators.required]],
      nombre_empresa: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const idtrabajo = this.activatedRoute.snapshot.params['id'];
    this.laboralService.detail(idtrabajo).subscribe((data) => {
      this.laboral = data;
      this.form.patchValue(data);
    });
  }

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

  onUpdate(event: Event): void {
    event.preventDefault();
    this.laboralService.update(this.form.value).subscribe(
      (data) => {
        alert('Experiencia laboral modificada!');
        this.ruta.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la Experiencia Laboral!');
      }
    );
  }
}
