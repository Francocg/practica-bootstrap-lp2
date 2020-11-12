import { Injectable } from '@angular/core';
import {Departamento} from '../models/departamento';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable, Subscription,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private httpHeaders = new HttpHeaders({'Content-Tipe':'application/json'});
  private DepartamentoUrl:string = 'http://localhost:8080/departamento';
  constructor(private http: HttpClient) { }
  getDepartamentos():Observable<Departamento[]>{
    return this.http.get<Departamento[]>(this.DepartamentoUrl+'/all');
  }
  getDepartamento(id:number):Observable<Object>{
    return this.http.get(`${this.DepartamentoUrl}/${id}`)
  }
  updateLogica(id:number): Observable<number>{
    return this.http.put<number>(`${this.DepartamentoUrl}/update/${id}`,{headers:this.httpHeaders});
  }
  addDepartamento(departamento:Departamento): Observable<number>{
    return this.http.post<number>(this.DepartamentoUrl+"/add", departamento, {headers:this.httpHeaders});
  }
  deleteDepartamento(id:number): Observable<number>{
    return this.http.delete<number>(this.DepartamentoUrl+"/delete/"+id,{headers:this.httpHeaders});
  }
  updateDepartamento(departamento:Departamento): Observable<number>{
    return this.http.put<number>(`${this.DepartamentoUrl}/update/${departamento.id_departamento}`, Departamento,{headers:this.httpHeaders});
  }
}
