import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  constructor(private httpClient: HttpClient) {}
  URL: string = environment.apiURL;

  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.URL + '/habilidad');
  }
}
