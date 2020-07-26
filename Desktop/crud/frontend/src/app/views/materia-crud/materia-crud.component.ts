import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-materia-crud',
  templateUrl: './materia-crud.component.html',
  styleUrls: ['./materia-crud.component.css']
})
export class MateriaCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData={
      title: 'Informações das matérias',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToMateriaCreate(): void {
    this.router.navigate(['/materia/create'])
  }

}
