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
  
    let data:any = {data:{
    eIdentificacion: Number(document.getElementById(`eIdentificacion-${estudiante}`)?.innerText),
    eTipodocumento: String(document.getElementById(`eTipodocumento-${estudiante}`)?.innerText) ,  
    eNombre: String(document.getElementById(`eNombre-${estudiante}`)?.innerText), 
    eApellido:String(document.getElementById(`eApellido-${estudiante}`)?.innerText),       
    eCelular:Number(document.getElementById(`eCelular-${estudiante}`)?.innerText) ,          
    eCorreo: String(document.getElementById(`eCorreo-${estudiante}`)?.innerText),                
    eFechaNacimiento: String(document.getElementById(`eFechaNacimiento-${estudiante}`)?.innerText), 
    eDireccion: String(document.getElementById(`eDireccion-${estudiante}`)?.innerText),         
    eGenero: String (document.getElementById(`eGenero-${estudiante}`)?.innerText),           
    eEstadoCivil: String(document.getElementById(`eEstadoCivil-${estudiante}`)?.innerText),       
    
    }};
    console.log(data);

    this.estudianteService.editar(estudiante,data).subscribe();
  }


}

