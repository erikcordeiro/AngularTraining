import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  apps = [
    { name: 'Tasks List Sample', path: 'tasks' },
    { name: 'Busca por Cep Sample', path: 'cep' },
    { name: 'Validação Sample', path: 'validacao' }
  ];

  constructor() { }

  ngOnInit() { }
}
