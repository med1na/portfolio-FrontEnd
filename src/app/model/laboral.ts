export class Laboral {
  idtrabajo!: number;
  nombre_trabajo: string;
  nombre_empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;

  constructor(
    idtrabajo: number,
    nombre_trabajo: string,
    nombre_empresa: string,
    fecha_inicio: string,
    fecha_fin: string,
    descripcion: string
  ) {
    this.idtrabajo = idtrabajo;
    this.nombre_trabajo = nombre_trabajo;
    this.nombre_empresa = nombre_empresa;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.descripcion = descripcion;
  }
}
