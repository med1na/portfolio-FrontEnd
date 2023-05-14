export class Educacion {
  ideducacion!: number;
  titulo: string;
  lugar_cursado: string;
  fecha_cursado: string;
  descripcion: string;
  persona_idusuarios: string;

  constructor(
    ideducacion: number,
    titulo: string,
    lugar_cursado: string,
    fecha_cursado: string,
    descripcion: string,
    persona_idusuarios: string
  ) {
    this.ideducacion = ideducacion;
    this.titulo = titulo;
    this.lugar_cursado = lugar_cursado;
    this.fecha_cursado = fecha_cursado;
    this.descripcion = descripcion;
    this.persona_idusuarios = persona_idusuarios;
  }
}
