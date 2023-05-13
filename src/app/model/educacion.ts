export class Educacion {
  ideducacion!: number;
  descripcion: string;
  fecha_cursado: string;
  lugar_cursado: string;
  persona_idusuarios: string;
  titulo: string;

  constructor(
    ideducacion: number,
    descripcion: string,
    fecha_cursado: string,
    lugar_cursado: string,
    persona_idusuarios: string,
    titulo: string
  ) {
    this.ideducacion = ideducacion;
    this.descripcion = descripcion;
    this.fecha_cursado = fecha_cursado;
    this.lugar_cursado = lugar_cursado;
    this.persona_idusuarios = persona_idusuarios;
    this.titulo = titulo;
  }
}
