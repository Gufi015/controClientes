import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from "@angular/fire/firestore";
import {AngularFireAuthModule, AngularFireAuth} from '@angular/fire/auth';
import { FlashMessagesModule } from "angular2-flash-messages";
import { FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './componentes/head/head.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { environment } from '../environments/environment';
import { from } from 'rxjs';
import { ClienteServicio } from './servicios/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ClienteServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
