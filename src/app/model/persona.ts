export class Persona {
  idusuarios!: number;
  nombre_usuario: string;
  contraseña: string;
  mail: string;

  constructor(nombre_usuario: string, contraseña: string, mail: string) {
    this.nombre_usuario = nombre_usuario;
    this.contraseña = contraseña;
    this.mail = mail;
  }
}
