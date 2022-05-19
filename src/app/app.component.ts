import { Component } from '@angular/core';
import pacienteJson from './data/paciente.json'
import { Paciente } from './models/paciente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PacienteApp';
  public paciente:Paciente;

  public constructor (){
    this.paciente = pacienteJson;
  }

}
