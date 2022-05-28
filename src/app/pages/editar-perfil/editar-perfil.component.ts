import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from '../../models/paciente';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {

  paciente:Paciente;
  pacienteForm:FormGroup;

  constructor(private localStorageService:LocalStorageService, public formBuilder:FormBuilder, public router:Router,
    private dateAdapter:DateAdapter<Date>) {

      this.paciente = localStorageService.getItem('paciente');
      this.dateAdapter.setLocale('es-ES');

      this.pacienteForm = this.formBuilder.group({
        
          nombre:['', [Validators.required, Validators.minLength(4)]], 
          email:['', [Validators.required, Validators.email]], 
          password:['',[Validators.required, Validators.minLength(8)]], 
          direccion:['', Validators.required], 
          codigoPostal:['', Validators.pattern ('[0-9]{5}')], 
          telefono:['',  Validators.pattern ('[0-9]{9}')],
          fechaNacimiento:['', Validators.required],
          numSeguridadSocial:['', [Validators.required, Validators.minLength(9)]]

      })
   }

  ngOnInit(): void {
    this.pacienteForm.patchValue(this.paciente);
  }
  onSubmit (){
    this.paciente = this.pacienteForm.value;
    this.localStorageService.setItem('paciente', this.paciente);
    this.router.navigate(['perfil']);
  }
 
  isValidField (field:string):string {
    const validatedField = this.pacienteForm.get(field);

    return (!validatedField?.valid && validatedField?.touched) 
    ? 'is-invalid' : validatedField?.touched? 'is-valid':'';
  }

}
