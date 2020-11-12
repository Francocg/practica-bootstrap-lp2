import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  departamentoModel:Departamento = new Departamento();
  constructor(private departamentoService:DepartamentoService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}
  public create():void{
    this.departamentoService.addDepartamento(this.departamentoModel).subscribe(
      response=>{
        swal.fire('Nuevo Departamento', `Departamento ${this.departamentoModel.depart_name} creado con exito`,"success") 
       this.router.navigate(['/listar'])
      
      })
  }
 }

