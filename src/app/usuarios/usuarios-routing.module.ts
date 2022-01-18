import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listar-usuarios' }, //a-route-path-default

  { path: 'listar-usuarios', component: TablaUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
