import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ContatoService {

  pessoasurl = 'http://localhost:8080/pessoas';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.pessoasurl}`);

  }

  adicionar(pessoa: any) {
    return this.http.post(this.pessoasurl, pessoa);
  }

}
