import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';



@NgModule({
  declarations: [
    HomeComponent,
    CitasComponent,
    PerfilComponent,
    EditarPerfilComponent,
    PedirCitaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
