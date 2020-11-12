import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './componenets/departamento/add/add.component';
import { ListarComponent } from './componenets/departamento/listar/listar.component';

const routes: Routes = [
  {path: 'listar',component:ListarComponent},
  {path: 'add', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
