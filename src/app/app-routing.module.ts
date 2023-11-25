import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcrudComponent } from './module/formcrud/formcrud.component';

const routes: Routes = [
  {
    path:'',
    component: FormcrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
