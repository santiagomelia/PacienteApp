import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  paciente:Paciente;

  constructor(localStorage:LocalStorageService) 
  {
    this.paciente = localStorage.getItem('paciente');
  }

  ngOnInit(): void {
  }

}
