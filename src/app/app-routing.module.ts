import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SedececarComponent } from './page/sedececar/sedececar.component';
import { RegdocenteComponent } from './page/regdocente/regdocente.component';
import { RegstudenComponent } from './page/regstuden/regstuden.component';

const routes: Routes = [
  {path:"sede", component:SedececarComponent},
  {path:"regdocente", component:RegdocenteComponent},
  {path:"regstuden",component:RegstudenComponent},
  {path:"**", pathMatch:"full", redirectTo:"sede"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
