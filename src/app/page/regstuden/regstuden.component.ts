import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-regstuden',
  templateUrl: './regstuden.component.html',
  styleUrls: ['./regstuden.component.css']
})

                              // implements OnInit
export class RegstudenComponent  {
  checkFamale:boolean=false;
  checkMas:boolean=true;
  formulario!: FormGroup;
  submitted=false;
  studen : any=[];
  //createUsuario: FormGroup;


 
 /* constructor(private fb: FormBuilder) {
 
    this.createUsuario = this.fb.group({
      Nombres: ['',Validators.required],
      Apellidos: ['',Validators.required],
      Tdocumento: ['',Validators.required],
      Direccion: ['',Validators.required],
      EstadoCivil: ['',Validators.required],
      Nacimiento: ['',Validators.required]
      
    })
  }*/
 

  constructor (private _http:HttpClient, private formBuilder:FormBuilder){}

  ngOnInit(): void {
    
    this.formulario = this.formBuilder.group({ 
      
      Nombres: ['',[Validators.required]],
      Apellidos: ['',[Validators.required]],
      Tdocumento: ['',[Validators.required]],
      Nacimiento: ['',[Validators.required]],
      Direccion: ['',[Validators.required]],
      EstadoCivil: ['',[Validators.required]]

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
  

  add(values: { Nombres: any; Apellidos: any; Tdocumento: any; Nacimiento: any; Direccion: any; EstadoCivil: any; }){
    this.submitted=true;
    if(this.formulario.invalid){
     return;
    } 
    var json={
     "eNombre":values.Nombres,
     "eApellido":values.Apellidos,
     "eTipodocumento":values.Tdocumento,
     "eFechaNacimiento": values.Nacimiento,
     "eDireccion": values.Direccion,
     "eEstadoCivil": values.EstadoCivil
    }

    var link = "http://172.177.150.81:1337/api/students";
    this._http.post(link,json).subscribe(res=>{
      alert("Se agrego El estudiate Existosamente");
    })
   }


 /*
 agregarUsuario(){
    const usuario: any = {
      Nombres: this.createUsuario.value.Nombres,
      Apellidos: this.createUsuario.value.Apellidos,
      Tdocumento: this.createUsuario.value.Tdocumento,
      Nacimiento: this.createUsuario.value.Nacimiento,
      Direccion: this.createUsuario.value.Direccion,
      EstadoCivil: this.createUsuario.value.EstadoCivil,
      fecheCreacionStuden: new Date()
    }
    console.log(usuario)
  }
 */
  onCheckedMas(){
    this.checkMas = true;
    this.checkFamale = false;
  }
  onCheckedFamale(){
    this.checkMas = false;
    this.checkFamale = true;
  }
}
