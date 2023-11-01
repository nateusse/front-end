import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  {
    path:'prueba',
    component: PruebaComponent  //import line3
} //path y end component, no tiene que coincir con el component name
  //avoid uppercase
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
