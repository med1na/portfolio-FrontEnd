export class Habilidad {
  idhabilidad!: number;
  tecnologia: string;
  descripcion: string;
  porcentaje: string;
  personaidpersona: string;
  idioma: string;

  constructor(
    tecnologia: string,
    descripcion: string,
    porcentaje: string,
    personaidpersona: string,
    idioma: string
  ) {
    this.tecnologia = tecnologia;
    this.descripcion = descripcion;
    this.porcentaje = porcentaje;
    this.personaidpersona = personaidpersona;
    this.idioma = idioma;
  }
}
