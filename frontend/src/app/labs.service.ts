import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabsService {
  backendURL = 'http://localhost:8000/api/';

  constructor(public http: HttpClient) { }

  public getLabs(): Observable<any> {
    return this.http.get(this.backendURL + 'lab');
  }
}
