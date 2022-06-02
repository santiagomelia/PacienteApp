import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/paciente';
import Swal from 'sweetalert2';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  public citas:Cita[];
  constructor(private localStorage:LocalStorageService) {
    this.citas = localStorage.getItem('citas'); 
  }

  ngOnInit(): void {
  }

  borrar(fecha:any, facultativo:any): void {
    Swal.fire({
      title: '¿Está seguro de borrar la cita?',
      text: "No podrás revertir el borrado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórrala!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.citas = this.citas.filter (function(cita){ return cita.fecha!=fecha && cita.Facultativo!=facultativo})
        Swal.fire(
          'Borrada!',
          'Tu cita ha sido borrada.',
          'success'
        )
      }
    })
  }

  
}
