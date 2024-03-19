import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-buscador-n',
  templateUrl: './buscador-n.component.html',
  styleUrl: './buscador-n.component.css'
})
export class BuscadorNComponent {

  constructor(private formBuilder : FormBuilder, private productoService : ProductoService){}

  buscadorform : FormGroup = this.formBuilder.group({
    producto : [0]
  })

}
