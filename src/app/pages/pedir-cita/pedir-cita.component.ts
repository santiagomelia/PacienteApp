import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Especialidad, Cita, Paciente } from '../../models/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedir-cita',
  templateUrl: './pedir-cita.component.html',
  styleUrls: ['./pedir-cita.component.scss']
})
export class PedirCitaComponent implements OnInit {

  especialidades:Especialidad[];
  citas:Cita[];
  paciente:Paciente;
  
  pedirCitaForm:FormGroup;

  constructor(private localStorage:LocalStorageService, private formBuilder:FormBuilder,
    private router:Router) { 
    this.especialidades = localStorage.getItem('especialidades');
    
    this.pedirCitaForm = this.formBuilder.group ({
        fecha: ['', Validators.required],
        Especialidad: ['', Validators.required],
        Facultativo: ['', Validators.required]
    });
    this.citas = localStorage.getItem('citas');
    this.paciente = localStorage.getItem('paciente');
  }
  
  get dameFacultativosEspe ():any {
    var espe = this.espeNombre;
    let objEspe = this.especialidades.find (x => x.nombre == espe);
    return objEspe?.medicos;
  }

  get espeNombre (){
    return this.pedirCitaForm.get('Especialidad')?.value;
  }

  onSubmit(){
    var numCita = this.citas.length+1;
    var cita: Cita = {
      id: numCita.toString(),
      fecha: this.pedirCitaForm.value.fecha,
      Facultativo: this.pedirCitaForm.value.Facultativo,
      Especialidad: this.pedirCitaForm.value.Especialidad,
      paciente: this.paciente.nombre
      
    };

    this.citas.unshift (cita);
    this.localStorage.setItem('citas', this.citas);
    this.router.navigate(['/citas']);
  }



  ngOnInit(): void {
  }

}
