import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  constructor(private httpClient: HttpClient) {}
  URL: string = environment.apiURL;

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + '/educacion');
  }
}
