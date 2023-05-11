import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboral } from '../model/laboral';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LaboralService {
  URL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  public update(laboral: Laboral): Observable<any> {
    return this.httpClient.put<any>(this.URL + '/laboral', laboral);
  }

  public detail(idtrabajo: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + `/laboral/${idtrabajo}`);
  }

  public lista(): Observable<Laboral[]> {
    return this.httpClient.get<Laboral[]>(this.URL + '/laboral');
  }

  public save(laboral: Laboral): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/laboral', laboral);
  }

  public delete(idtrabajo: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/laboral/${idtrabajo}`);
  }
}
