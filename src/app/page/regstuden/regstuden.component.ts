import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-regstuden',
  templateUrl: './regstuden.component.html',
  styleUrls: ['./regstuden.component.css']
})


export class RegstudenComponent implements OnInit {
  checkFamale:boolean=false;
  checkMas:boolean=true;
  createUsuario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.createUsuario = this.fb.group({
      Nombres: ['',Validators.required],
      Apellidos: ['',Validators.required],
      Tdocumento: ['',Validators.required],
      Direccion: ['',Validators.required],
      EstadoCivil: ['',Validators.required]
      
    })
  }

  ngOnInit(): void {
   
  }
 
  agregarUsuario(){
    const usuario: any = {
      Nombres: this.createUsuario.value.Nombres,
      Apellidos: this.createUsuario.value.Apellidos,
      Tdocumento: this.createUsuario.value.Tdocumento,
      Nacimiento: new Date(),
      Direccion: this.createUsuario.value.Direccion,
      EstadoCivil: this.createUsuario.value.EstadoCivil
    }
    console.log(usuario)
  }

  onCheckedMas(){
    this.checkMas = true;
    this.checkFamale = false;
  }
  onCheckedFamale(){
    this.checkMas = false;
    this.checkFamale = true;
  }
}
