import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion-editar',
  templateUrl: './modal-educacion-editar.component.html',
  styleUrls: ['./modal-educacion-editar.component.css'],
})
export class ModalEducacionEditarComponent implements OnInit {
  form: FormGroup;
  educacion: Educacion = new Educacion(0, '', '', '', '', '');

  constructor(
    private formBuilder: FormBuilder,
    private educacionService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private ruta: Router
  ) {
    //Se crea el grupo de controles para el formulario
    this.form = this.formBuilder.group({
      ideducacion: [''],
      descripcion: ['', [Validators.required]],
      fecha_cursado: ['', [Validators.required]],
      lugar_cursado: ['', [Validators.required]],
      persona_idusuarios: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const ideducacion = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detail(ideducacion).subscribe((data) => {
      this.educacion = data;
      this.form.patchValue(data);
    });
  }

  //Para las validaciones
  get Titulo() {
    return this.form.get('titulo');
  }

  get Descripcion() {
    return this.form.get('descripcion');
  }

  get FechaC() {
    return this.form.get('fecha_cursado');
  }

  get LugarC() {
    return this.form.get('lugar_cursado');
  }

  get UsuarioId() {
    return this.form.get('persona_idusuarios');
  }

  onUpdate(event: Event): void {
    event.preventDefault();
    this.educacionService.update(this.form.value).subscribe(
      (data) => {
        alert('Educacion modificada!');
        this.ruta.navigate(['']);
      },
      (err) => {
        alert('Error al modificar educacion!');
      }
    );
  }
}
