import { Component, OnInit } from '@angular/core';
import { CepService } from '../cep.service';
import { Cep } from '../cep';

@Component({
  selector: 'app-cep-sample',
  templateUrl: './cep-sample.component.html',
  styleUrls: ['./cep-sample.component.css']
})
export class CepSampleComponent implements OnInit {
  title     = 'Busca por Cep Sample';
  isLoading = false;

  cep: Cep = new Cep();

  constructor(private cepService: CepService) { }

  ngOnInit() { }

  buscar() {
    this.isLoading = true;
    this.cepService.buscar(this.cep.cep)
                   .then((cep: Cep) => {
                     this.isLoading = false;
                     this.cep = cep;
                   })
                   .catch(() => {
                     this.isLoading = false;
                     const cep = this.cep.cep;
                     this.cep = new Cep();
                     this.cep.cep = cep;
                     alert('Não foi possível localizar o Cep informado.');
                   });
  }
}
