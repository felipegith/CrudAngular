import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './views/home/home.component';
import { MateriaCrudComponent } from "./views/materia-crud/materia-crud.component";
import { MateriaCreateComponent } from './components/mate/materia-create/materia-create.component';
import { MateriaUpdateComponent } from './components/mate/materia-update/materia-update.component';
import { MateriaDeleteComponent } from './components/mate/materia-delete/materia-delete.component';


const routes: Routes = [{
  path: "", 
  component: HomeComponent
},
{
  path: "products",
  component: MateriaCrudComponent 
},
{
  path:"materia/create",
  component: MateriaCreateComponent
},

{
  path: "materia/update/:id",
  component: MateriaUpdateComponent
},
{
  path: "materia/delete/:id",
  component: MateriaDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
