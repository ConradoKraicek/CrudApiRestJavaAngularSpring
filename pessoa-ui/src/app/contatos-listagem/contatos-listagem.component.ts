import { Component, OnInit, NgModule } from '@angular/core';
import { ContatoService} from '../contato.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {
  pessoas: Array<any>;
  nome: String = 'Software de Cadastro';
  constructor(private contatoService: ContatoService) { }

  ngOnInit() {

    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe(dados => this.pessoas = dados);
  }

  adicionar(frm: FormControl) {
    this.contatoService.adicionar(frm.value)
    .subscribe(() => {
      frm.reset();
      this.listar();
    });

  }

  }
