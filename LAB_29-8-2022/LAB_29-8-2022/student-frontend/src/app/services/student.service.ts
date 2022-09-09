import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Student } from '../models/Student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL: string = "http://localhost:4000/api/v1/student";
  httpHeader = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

  createNewStudent(data: Student): Observable<any> {
    return this.httpClient.post(this.API_URL, data);
  }
  // Get all object
  getAllStudent() {
    return this.httpClient.get(this.API_URL);
  }
  // Get single object
  getStudent(id: number): Observable<any> {
    let apiurl = `${this.API_URL}/${id}`;
    return this.httpClient.get(apiurl, { headers: this.httpHeader })
      .pipe(map((res: any) => 
      { return res || {} }), 
        catchError(this.handleError)
      );
  }
  // Update
  updateStudent(id: number, data: any ):Observable<any> {
    let apiurl = `${this.API_URL}/${id}`;
    return this.httpClient.put(apiurl, data, { headers: this.httpHeader} )
      .pipe(catchError(this.handleError)
      );
  }
  deleteStudent(id: number): Observable<any> {
    let apiurl = `${this.API_URL}/${id}`;
    console.log(apiurl);
    return this.httpClient.delete(apiurl, { headers: this.httpHeader }).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent)
      errorMessage = error.error.message;
    else
      errorMessage = "error code:" + error.status + error.message;

    console.log(errorMessage);
    return errorMessage;
  }
}
