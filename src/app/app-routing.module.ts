import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { PedirCitaComponent } from './pages/pedir-cita/pedir-cita.component';
import { CitasComponent } from './pages/citas/citas.component';

const routes: Routes = [
    {
        path:'home', component: HomeComponent
    },
    {
        path:'citas', component:CitasComponent
    },
    {
        path:'perfil', component: PerfilComponent
    },
    {
        path:'editarPerfil', component:EditarPerfilComponent
    },
    {
        path:'pedirCita', component:PedirCitaComponent
    },
    {
        path:'**', component:HomeComponent
    }
]

@NgModule({
  declarations: [],
  imports:[
      CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports:[
      RouterModule
  ]
})

export class AppRoutingModule {}
