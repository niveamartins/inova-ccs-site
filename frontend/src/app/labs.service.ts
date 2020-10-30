import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabsService {
  backendURL = 'http://localhost:8080/api/';

  constructor(public http: HttpClient) { }

  // função que pega todos os labs
  public getLabs(): Observable<any> {
    return this.http.get(this.backendURL);
  }
  // servico?Tag=1
  public getLab_byId(id: string): Observable<any> {
    return this.http.get(this.backendURL + 'servico?Tag=' + id);
  }
}
