import { Component } from '@angular/core';
import { RecentOrders } from 'src/app/interfaces/recent-orders.interface';

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

  recentOrders: RecentOrders[] = [
    {
      id: 1,
      orderNumber: '#12B7889Y2',
      client: 'Gabriel Dantas',
      date: new Date(2024, 5, 18, 14, 14, 56, 789).toISOString(),
      status: 'WAITING_PAYMENT',
    },
    {
      id: 2,
      orderNumber: '#91Z8723K3',
      client: 'João Gomes',
      date: new Date(2024, 5, 14, 12, 34, 56, 789).toISOString(),
      status: 'DELIVERED',
    },
    {
      id: 3,
      orderNumber: '#42B3723Y1',
      client: 'Cynthia Luz',
      date: new Date(2024, 5, 10, 2, 37, 56, 789).toISOString(),
      status: 'PAID',
    },
    {
      id: 4,
      orderNumber: '#90O8723I2',
      client: 'João Gomes',
      date: new Date(2024, 4, 28, 18, 42, 56, 789).toISOString(),
      status: 'CANCELED',
    }
  ];

  columns: string[] = ['N° Pedido ', 'Cliente', 'Data', 'Status', 'Ações'];

  constructor() {
    console.log(this.recentOrders)
  }
 
}
