import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  constructor(private httpClient: HttpClient) {}
  URL: string = environment.apiURL;

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + '/persona');
  }
}
