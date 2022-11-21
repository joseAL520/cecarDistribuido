import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequerReponsive } from '../model/';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
 

  constructor(private HttpClient: HttpClient) { }

  cargarEstudiantes(){
   const url = "http://172.177.150.81:1337/api/students";

    return this.HttpClient.get<RequerReponsive>(url)
            .pipe(
              map(resp =>{
                return resp.data;
              })
            )


  }
 

  
}
