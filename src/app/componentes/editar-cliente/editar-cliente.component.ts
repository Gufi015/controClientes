import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../modelo/cliente.model';
import { ClienteServicio } from '../../servicios/cliente.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: "app-editar-cliente",
  templateUrl: "./editar-cliente.component.html",
  styleUrls: ["./editar-cliente.component.css"]
})
export class EditarClienteComponent implements OnInit {


  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0
  };

  id: string;

  constructor(
    private clienteServicio: ClienteServicio,
    private flashMessages: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.clienteServicio.getCliente(this.id).subscribe(cliente => {
      this.cliente = cliente;
    });
  }

  actualizarCliente({value, valid}: {value: Cliente, valid:boolean}) {
    if(!valid){
      this.flashMessages.show('Por favor rellena el formulario correctamente!',{
        cssClass: 'alert-danger', timeout:4000
      });
    }else{
      value.id = this.id;
      //actualizar clase del servicio
      this.clienteServicio.actualizarCliente(value);
      this.router.navigate(['/']);
    }

  }

  eliminar() {
    if(confirm('Deseas eliminar este cliente')){
      this.clienteServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }
}
