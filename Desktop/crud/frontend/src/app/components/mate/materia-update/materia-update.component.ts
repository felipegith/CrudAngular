import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Materia } from '../materia.model';

@Component({
  selector: 'app-materia-update',
  templateUrl: './materia-update.component.html',
  styleUrls: ['./materia-update.component.css']
})
export class MateriaUpdateComponent implements OnInit {

    materia: Materia

  constructor(private materiaService: MateriaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const id= +this.route.snapshot.paramMap.get('id')
      this.materiaService.readById(id).subscribe(materia=>{
        this.materia=materia
      })
  }
  updateMateria(): void{
      this.materiaService.update(this.materia).subscribe(()=>{
          this.materiaService.showMessage('Materia atualizada!')
          this.router.navigate(["/products"])
      })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
