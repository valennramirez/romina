import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarProductoComponent } from './components/producto/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { GuardarProductoComponent } from './components/producto/guardar-producto/guardar-producto.component';
import { VisualizarProductosComponent } from './components/producto/visualizar-productos/visualizar-productos.component';
import { AgregarProductoPageComponent } from './pages/agregar-producto-page/agregar-producto-page.component';
import { BuscadorProductoPageComponent } from './pages/buscador-producto-page/buscador-producto-page.component';
import { BusquedaPageComponent } from './pages/busqueda-page/busqueda-page.component';
import { EditarProductoPageComponent } from './pages/editar-producto-page/editar-producto-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscadorNComponent } from './shared/buscador-n/buscador-n.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarProductosComponent,
    EditarProductoComponent,
    GuardarProductoComponent,
    NavbarComponent,
    InicioPageComponent,
    AgregarProductoPageComponent,
    EditarProductoPageComponent,
    BuscadorProductoPageComponent,
    BusquedaPageComponent,
    BuscarProductoComponent, 
    BuscarProductoComponent,
    BuscadorNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
