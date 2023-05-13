export class Persona {
  idusuarios!: number;
  nombre_usuario: string;
  contraseña: string;
  mail: string;
  provincia: string;
  telefono: string;

  constructor(
    nombre_usuario: string,
    contraseña: string,
    mail: string,
    provincia: string,
    telefono: string
  ) {
    this.nombre_usuario = nombre_usuario;
    this.contraseña = contraseña;
    this.mail = mail;
    this.provincia = provincia;
    this.telefono = telefono;
  }
}
