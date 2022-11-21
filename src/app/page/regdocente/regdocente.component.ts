import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../model/estudiante';


@Component({
  selector: 'app-regdocente',
  templateUrl: './regdocente.component.html',
  styleUrls: ['./regdocente.component.css']
})
export class RegdocenteComponent implements OnInit{

  public estudiantes: any; 

  constructor (private estudianteService: EstudianteService ){}

  ngOnInit(): void {
    
    this.estudianteService.cargarEstudiantes()
    .subscribe( (estudiantes)  =>{
      console.log(estudiantes);
     this.estudiantes = estudiantes;
    });
  }
}