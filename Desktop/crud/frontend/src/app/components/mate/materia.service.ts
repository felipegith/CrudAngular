import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Materia } from './materia.model';
import { Observable, EMPTY } from 'rxjs';
import { ifError } from 'assert';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  baseUrl = "http://localhost:3001/procuts"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean=false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError? ['msg-error'] : ['msg-success']

    })
  }

  create(materia: Materia): Observable<Materia>{
    return this.http.post<Materia>(this.baseUrl, materia).pipe(
      map((obj)=>obj),
      catchError(e=> this.errorHandler(e))
      );
  }
     
  read(): Observable  <Materia[]>{
      return this.http.get<Materia[]>(this.baseUrl).pipe(
        map((obj)=>obj),
        catchError(e=> this.errorHandler(e))
        );
  }
  readById(id: number): Observable<Materia>{
      const url=`${this.baseUrl}/${id}`
      return this.http.get<Materia>(url).pipe(
        map((obj)=>obj),
        catchError(e=> this.errorHandler(e))
        );
  }
  update(materia: Materia): Observable<Materia>{
    const url=`${this.baseUrl}/${materia.id}`
      return this.http.put<Materia>(url, materia).pipe(
        map((obj)=>obj),
        catchError(e=> this.errorHandler(e))
        );
  }

  delete(id: number): Observable<Materia>{
      const url=`${this.baseUrl}/${id}`
      return this.http.delete<Materia>(url).pipe(
        map((obj)=>obj),
        catchError(e=> this.errorHandler(e))
        );
  }
  errorHandler(e: any): Observable<any>{
    this.showMessage('Ocorreu um erro!', true)
     return EMPTY
  }
}
