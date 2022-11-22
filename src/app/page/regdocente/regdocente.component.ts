import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service';




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

    this.eliminarEstudiante
  }

   eliminarEstudiante(estudiante:any){
    //console.log(estudiante)
    this.estudianteService.eliminar(estudiante).subscribe();
    
  }


  actualizar(estudiante:number){
    /* console.log(estudiante);
    console.log(`eIdentificacion-${estudiante}`);
    console.log(document.getElementById(`eIdentificacion-${estudiante}`)); */
    let data:any = {data:{
    eNombre: document.getElementById(`eNombre-${estudiante}`)?.innerText,           
    /* eCelular: document.getElementById(``),          
    eCorreo: document.getElementById(``),           
    createdAt: document.getElementById(``),       
    updatedAt: document.getElementById(``),       
    publishedAt: document.getElementById(``),     
    eApellido: document.getElementById(``),         
    eFechaNacimiento: document.getElementById(``), 
    eDireccion: document.getElementById(``),        
    eTipodocumento: document.getElementById(``),    
    eGenero: document.getElementById(``),           
    eEstadoCivil: document.getElementById(``), */      
    eIdentificacion: Number(document.getElementById(`eIdentificacion-${estudiante}`)?.innerText),
    }};
    console.log(data);

    this.estudianteService.editar(estudiante,data).subscribe();
  }


}

