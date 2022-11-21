import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-regstuden',
  templateUrl: './regstuden.component.html',
  styleUrls: ['./regstuden.component.css']
})


export class RegstudenComponent  {
  submitted = false;
  formulario!: FormGroup;
  studen : any=[];

  constructor (private _http:HttpClient, private formBuilder:FormBuilder){}

  ngOnInit(): void {
     
    this.formulario = this.formBuilder.group({ 
      
      Nombres: ['',[Validators.required]],
      Apellidos: ['',[Validators.required]],
      Tdocumento: ['',[Validators.required]],
      Nacimiento: ['',[Validators.required]],
      Direccion: ['',[Validators.required]],
      EstadoCivil: ['',[Validators.required]],
      Identificacion: ['',[Validators.required]],
      Celular: ['',[Validators.required]],
      Correo: ['',[Validators.required]],
      Genero: ['',[Validators.required]]

    });
    
   var link="http://172.177.150.81:1337/api/students/";

   //leer en la Api
    this._http.get(link).subscribe(res=>{
      console.log(this.studen=res);
    })

  }
 
  /*para agregar un formulario
  get f(){
      return this.formulario.controls;
  }
  
  */
  

  add(values: { Nombres: any; Celular: any; Correo: any; Apellidos: any; Tdocumento: any; Nacimiento: any; Direccion: any; Genero: any; EstadoCivil: any; Identificacion: any; }){
    this.submitted=true;
    if(this.formulario.invalid){
      alert("debe que llenar todo los campos");
      return;
    }
    var json={
      data:{
        "eNombre":values.Nombres,
        "eCelular":values.Celular,
        "eCorreo":values.Correo,
        "eApellido":values.Apellidos,
        "eTipodocumento":values.Tdocumento,
        "eFechaNacimiento": values.Nacimiento,
        "eDireccion": values.Direccion,
        "eGenero":values.Genero,
        "eEstadoCivil": values.EstadoCivil,
        "eIdentificacion":values.Identificacion
      }
    }

    var link = "http://172.177.150.81:1337/api/students";
    this._http.post(link,json).subscribe(res=>{
      alert("Se agrego El estudiate Existosamente");
      location.reload();
    })
  }

}
