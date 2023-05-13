import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modal-educacion-add',
  templateUrl: './modal-educacion-add.component.html',
  styleUrls: ['./modal-educacion-add.component.css'],
})
export class ModalEducacionAddComponent implements OnInit {
  form: FormGroup;
  ideducacion = 0;
  descripcion = '';
  fecha_cursado = '';
  lugar_cursado = '';
  titulo = '';
  persona_idusuarios = '';

  constructor(
    formBuilder: FormBuilder,
    private educacionService: EducacionService
  ) {
    //Se crea el grupo de controles para el formulario
    this.form = formBuilder.group({
      titulo: ['', [Validators.required]],
      fecha_cursado: ['', [Validators.required]],
      lugar_cursado: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  //Para las validaciones
  get Titulo() {
    return this.form.get('titulo');
  }

  get LugarC() {
    return this.form.get('lugar_cursado');
  }

  get FechaC() {
    return this.form.get('fecha_cursado');
  }

  get DescripcionT() {
    return this.form.get('descripcion');
  }

  //Validaciones
  get TituloEdu() {
    return this.Titulo?.touched && !this.Titulo.valid;
  }

  get LugarCurso() {
    return this.LugarC?.touched && !this.LugarC.valid;
  }

  get fechaCurso() {
    return this.FechaC?.touched && !this.FechaC.valid;
  }

  get descripcionValid() {
    return this.DescripcionT?.touched && !this.DescripcionT.valid;
  }

  onCreate(event: Event): void {
    const educ = new Educacion(
      this.ideducacion,
      this.lugar_cursado,
      this.fecha_cursado,
      this.titulo,
      this.persona_idusuarios,
      this.descripcion
    );
    this.educacionService.save(educ).subscribe(
      (data) => {
        alert('Educación añadida!');
        window.location.reload();
      },
      (err) => {
        alert('Error al guardar educación');
        this.form.reset();
      }
    );
  }

  limpiar(): void {
    this.form.reset();
  }
}
