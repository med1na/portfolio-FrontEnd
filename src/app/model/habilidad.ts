export class Habilidad {
  idhabilidad!: number;
  tecnologia: string;
  porcentaje: string;
  descripcion: string;
  personaidpersona: string;
  idioma: string;

  constructor(
    tecnologia: string,
    porcentaje: string,
    descripcion: string,
    personaidpersona: string,
    idioma: string
  ) {
    this.tecnologia = tecnologia;
    this.porcentaje = porcentaje;
    this.descripcion = descripcion;
    this.personaidpersona = personaidpersona;
    this.idioma = idioma;
  }
}
