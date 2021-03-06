import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  paciente:Paciente;

  constructor(localStorage:LocalStorageService, private router:Router) 
  {
    this.paciente = localStorage.getItem('paciente');
  }

  ngOnInit(): void {
  }

  onEdit(){
    this.router.navigate (['editarPerfil']);
  }

}
