import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Cep } from './cep';

@Injectable()
export class CepService {

  constructor(private http: Http) { }

  buscar(cep: string) {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`)
                    .toPromise()
                    .then((response) => this.converterRespostaParaCep(response.json()));
  }

  private converterRespostaParaCep(jsonResponse): Cep {
    const cep = new Cep();
    if (!jsonResponse.erro) {
      cep.cep = jsonResponse.cep;
      cep.logradouro = jsonResponse.logradouro;
      cep.numero = jsonResponse.complemento;
      cep.cidade = jsonResponse.localidade;
      cep.bairro = jsonResponse.bairro;
      cep.estado = jsonResponse.uf;
    }

    return cep;
  }
}
