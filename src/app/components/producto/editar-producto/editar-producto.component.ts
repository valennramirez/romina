import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../../interfaces/producto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{

  constructor(private productoService : ProductoService, private formBuilder : FormBuilder, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.initForm(); 
  }

  producto : Producto | undefined; 

  formulario : FormGroup = this.formBuilder.group({
    nombre: [''], 
    marca : [''], 
    precioCosto: [0], 
    categoria: [''], 
    porcentaje: [''],
    id : [0]
  })

  initForm()
  {
    this.route.params.subscribe((async param =>{
      
      const id=+param['id']; 

      this.getProducto(id);  

    }))
  }

  getProducto(id : number)
  {
    this.productoService.getProducto(id).subscribe({
      next : (pr) => {
        this.formulario = this.formBuilder.group({
          nombre : [pr.nombre],
          marca : [pr.marca], 
          precioCosto : [pr.precioCosto], 
          categoria : [pr.categoria], 
          porcentaje: [''], 
          id : [pr.id]
        });
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }

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

  actualizarProducto ()
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

    

    console.log(producto);

    this.productoService.putProducto(producto.id, producto).subscribe({
      next : (pr) => {
        console.log('producto agregado: ' + pr); 
        window.location.replace('/listado-productos')
      }, 
      error : (err) => {
        console.log(err); 
      }
    })
  }


}
