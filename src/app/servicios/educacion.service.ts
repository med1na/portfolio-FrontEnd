import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL: string = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Educacion[]> {
    return this.httpClient.get<Educacion[]>(this.URL + '/educacion');
  }

  public update(educacion: Educacion): Observable<any> {
    return this.httpClient.put<any>(this.URL + '/educacion', educacion);
  }

  public detail(ideducacion: number): Observable<any> {
    return this.httpClient.get<any>(this.URL + `/educacion/${ideducacion}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.URL + '/educacion', educacion);
  }

  public delete(ideducacion: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `/educacion/${ideducacion}`);
  }
}
