import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validacao-sample',
  templateUrl: './validacao-sample.component.html',
  styleUrls: ['./validacao-sample.component.css']
})
export class ValidacaoSampleComponent implements OnInit {
  nome = '';
  emailModel = '';

  constructor() { }

  ngOnInit() { }
}
