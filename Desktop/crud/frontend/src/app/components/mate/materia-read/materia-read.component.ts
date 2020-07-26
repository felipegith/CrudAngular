import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia.model';
import { MateriaService } from '../materia.service';

@Component({
  selector: 'app-materia-read',
  templateUrl: './materia-read.component.html',
  styleUrls: ['./materia-read.component.css']
})
export class MateriaReadComponent implements OnInit {

    materias: Materia[]
    displayedColumns = ['id', 'name', 'modulo', 'conteudo', 'action']
  constructor(private materiaService: MateriaService) { }

  ngOnInit(): void {
      this.materiaService.read().subscribe(materias=>{
        this.materias= materias
        console.log(materias)
      })
  }

}
