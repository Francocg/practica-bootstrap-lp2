import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
departamento:any;
  constructor(private depatamentoService:DepartamentoService, private router:Router) { }

  ngOnInit(): void {
    this.listar();
  }
  delDepartamento(num:number):void{
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras reverti esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listar()
        Swal.fire(
          'Eliminado!',
          'El registro ha sido eliminado.',
          'success')
        }    
      this.depatamentoService.deleteDepartamento(num).subscribe(
        response=>{      
        })
    })  
  }


  listar():void{
    this.depatamentoService.getDepartamentos().subscribe(
      (data)=>{
        this.departamento = data['cursor_departamento'];
        console.log("Departamento", this.departamento);
      },(err)=>{
        console.log("Error en el listar-departamento-componet")
      }
    )
  }
}
