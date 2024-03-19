import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoPageComponent } from './pages/agregar-producto-page/agregar-producto-page.component';
import { BuscadorProductoPageComponent } from './pages/buscador-producto-page/buscador-producto-page.component';
import { EditarProductoPageComponent } from './pages/editar-producto-page/editar-producto-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {path:'actualizar-producto/:id', component: EditarProductoPageComponent}, 
  {path: 'nuevo-producto', component: AgregarProductoPageComponent}, 
  {path: 'inicio/todos', component: InicioPageComponent}, 
  {path: 'buscar/:op', component: BuscadorProductoPageComponent}, 


  {path: '**', redirectTo: 'inicio/todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
