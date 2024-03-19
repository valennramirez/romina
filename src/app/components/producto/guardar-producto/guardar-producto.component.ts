import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../../interfaces/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent {
  
  constructor(private productoService : ProductoService, private formBuilder : FormBuilder, private router: Router){}

  producto : Producto | undefined; 

  formulario : FormGroup = this.formBuilder.group({
    nombre : [''],
    marca : [''], 
    precioCosto : [0], 
    id : [0], 
    categoria : [''], 
    porcentaje: ['']
  }); 

  setPrecio(costo : number, por : string)
  {
    let precio : number = 0; 

    console.log(por); 

    if(por == '1.40')
    {
      precio = costo * 1.40; 
    }
    else 
    {
      precio = costo * 1.35; 
    }

    if(precio % 1 < 0.4)
    {
       precio = Math.floor(precio);   
    }
    else 
    {
      precio = Math.ceil(precio); 
    }

    return precio; 
  }
  guardarProducto ()
  {
    const nombre : string = this.formulario.controls['nombre'].value; 
    const marca : string =  this.formulario.controls['marca'].value; 

    const producto : Producto = {
      nombre: nombre.toUpperCase(), 
      marca: marca.toUpperCase(), 
      precioCosto : this.formulario.controls['precioCosto'].value, 
      precioPublico: this.setPrecio(this.formulario.controls['precioCosto'].value, this.formulario.controls['porcentaje'].value), 
      id: this.formulario.controls['id'].value,
      categoria: this.formulario.controls['categoria'].value
    }

    this.productoService.postProducto(producto).subscribe({
      next : (pr) => {
        console.log('producto agregado: ' + pr); 
        this.router.navigate(['listado-productos']);
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }


}

