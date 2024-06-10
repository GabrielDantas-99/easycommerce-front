import { Component } from '@angular/core';

interface ResumeItem {
  valor: number;
  porcentagem: number;
}

interface ItemCard {
  receitaTotal: ResumeItem,
  gastosTotais: ResumeItem, 
  lucroLiquido: ResumeItem, 
  pedidosRealizados: ResumeItem
}

@Component({
  selector: 'app-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent {

  resumo: ItemCard = {
    receitaTotal: {
      valor: 1274.13,
      porcentagem: 7.4
    },
    gastosTotais: {
      valor: 472.42,
      porcentagem: -2.1
    }, 
    lucroLiquido: {
      valor: 801.58,
      porcentagem: 12.1
    }, 
    pedidosRealizados: {
      valor: 9,
      porcentagem: -10
    }
  }
 
}
