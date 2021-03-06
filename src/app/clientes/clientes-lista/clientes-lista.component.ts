import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {
  
  clienteLista: Cliente[] = []
  constructor(private service: ClientesService) { }

  ngOnInit(): void {
    this.service
         .listaClientes()
         .subscribe( resposta => this.clienteLista = resposta);
  }

}
