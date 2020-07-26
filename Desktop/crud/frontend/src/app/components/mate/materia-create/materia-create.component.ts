import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';
import { Router } from '@angular/router';
import { Materia } from '../materia.model';

@Component({
  selector: 'app-materia-create',
  templateUrl: './materia-create.component.html',
  styleUrls: ['./materia-create.component.css']
})
export class MateriaCreateComponent implements OnInit {

  materia: Materia={
    name: '',
    periodo: null,
    modulo:'',
    conteudo: ''
  }

  constructor(private materiaService: MateriaService, 
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createMateria(): void{
    this.materiaService.create(this.materia).subscribe(()=>{
      this.materiaService.showMessage('Materia criada!')
      this.router.navigate(['/products'])
    })
    
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
