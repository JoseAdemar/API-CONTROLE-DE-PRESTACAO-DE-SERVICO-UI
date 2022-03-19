import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  
  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  constructor( private service: ClientesService ) {
    this.cliente = new Cliente();
   }

  ngOnInit(): void {
  }

  // Método para tratar as respostas de erros e sucesso na tela de cliente
  onSubmit(){
    this.service.salvarCliente(this.cliente)
    .subscribe( response => {
      this.success = true;
      this.errors = null
      this.cliente = response
    } , errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
      console.log(errorResponse.error.errors)
        
    }
    )
  }
}

