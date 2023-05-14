import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidad-add',
  templateUrl: './modal-habilidad-add.component.html',
  styleUrls: ['./modal-habilidad-add.component.css'],
})
export class ModalHabilidadAddComponent implements OnInit {
  form: FormGroup;
  idhabilidad = 0;
  tecnologia = '';
  porcentaje = '';
  idioma = '';
  descripcion = '';
  personaidpersona = '';

  constructor(
    formBuilder: FormBuilder,
    private habilidadService: HabilidadService
  ) {
    //Se crea el grupo de controles para el formulario
    this.form = formBuilder.group({
      tecnologia: ['', [Validators.required]],
      porcentaje: [
        '',
        [Validators.required, Validators.min(1), Validators.max(100)],
      ],
    });
  }

  ngOnInit(): void {}

  //Para las validaciones
  get Tec() {
    return this.form.get('tecnologia');
  }

  get Porcen() {
    return this.form.get('porcentaje');
  }

  //Validaciones
  get TecnologiaV() {
    return this.Tec?.touched && !this.Tec.valid;
  }

  get ValorPorcentaje() {
    return this.Porcen?.touched && !this.Porcen.valid;
  }

  onCreate(event: Event): void {
    const habi = new Habilidad(
      this.tecnologia,
      this.porcentaje,
      this.idioma,
      this.descripcion,
      this.personaidpersona
    );
    this.habilidadService.save(habi).subscribe(
      (data) => {
        alert('Habilidad añadida!');
        window.location.reload();
      },
      (err) => {
        alert('Error al guardar habilidad');
        this.form.reset();
      }
    );
  }

  limpiar(): void {
    this.form.reset();
  }
}
