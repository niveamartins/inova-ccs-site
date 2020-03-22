import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LabsService {
  constructor(public http: HttpClient) { }

  // função que pega todos os labs
  public getLabs(): Observable<any> {
    return this.http.get(environment.myEndpoint);
  }
  // servico?Tag=1
  public getLab_byId(id: string): Observable<any> {
    return this.http.get(environment.myEndpoint + 'servico?Tag=' + id);
  }
}
