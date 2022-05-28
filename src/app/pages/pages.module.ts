import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { PedirCitaComponent } from './pedir-cita/pedir-cita.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    HomeComponent,
    CitasComponent,
    PerfilComponent,
    EditarPerfilComponent,
    PedirCitaComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, MatDatepickerModule,MatNativeDateModule 
  ]
})
export class PagesModule { }
