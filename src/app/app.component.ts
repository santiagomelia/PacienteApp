import { Component } from '@angular/core';
import pacienteJson from './data/paciente.json'
import citasJson from './data/citas.json'
import cuadroJson from './data/cuadroMedico.json'
import { Paciente, Cita, Especialidad } from './models/paciente';

import { LocalStorageService } from './services/local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PacienteApp';
  public paciente:Paciente;
  public citas: Cita[];
  public especialidades:Especialidad[];


  public constructor (localStorage:LocalStorageService){
    this.paciente = pacienteJson;
    this.citas = citasJson;
    this.especialidades = cuadroJson;
    localStorage.setItem('paciente', this.paciente);
    localStorage.setItem('citas', this.citas);
    localStorage.setItem('especialidades', this.especialidades);
  }

}
