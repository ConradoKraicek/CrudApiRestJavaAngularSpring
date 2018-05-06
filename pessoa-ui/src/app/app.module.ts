import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import { ContatosListagemComponent } from './contatos-listagem/contatos-listagem.component';
import { ContatoService} from './contato.service';

@NgModule({
  declarations: [
    AppComponent,
    ContatosListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
    FormsModule

  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
