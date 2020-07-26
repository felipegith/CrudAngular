import { Component, OnInit } from '@angular/core';
import { Materia } from '../materia.model';
import { MateriaService } from '../materia.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materia-delete',
  templateUrl: './materia-delete.component.html',
  styleUrls: ['./materia-delete.component.css']
})
export class MateriaDeleteComponent implements OnInit {
  materia: Materia

  constructor(private materiaService: MateriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id =+this.route.snapshot.paramMap.get('id'); 
      this.materiaService.readById(id).subscribe(materia=>{
          this.materia = materia
      })
  }
  deleteMateria(): void{
      this.materiaService.delete(this.materia.id).subscribe(()=>{
          this.materiaService.showMessage('Materia excluida!')
          this.router.navigate(['/products'])
        })

  }
  cancel(): void{
      this.router.navigate(['/products'])
  }
}
