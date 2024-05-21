import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.css']
})
export class SummaryCardComponent {

  @Input() titulo: string;
  @Input() icone: string;
  @Input() iconeColor: string;
  @Input() bgColor: string;
  @Input() valor: number;
  @Input() porcentagem: number;
  @Input() atributo: string;

  resume = {
    receitaTotal: {
      iconColor: "text-[--orange]",
      bgColor: "bg-[--orange-light]"
    },
    gastosTotais: {
      iconColor: "text-[--red]",
      bgColor: "bg-[--red-light]"
    },
    lucroLiquido: {
      iconColor: "text-[--cyan]",
      bgColor: "bg-[--cyan-light]"
    },
    pedidosRealizados: {
      iconColor: "text-[--blue]",
      bgColor: "bg-[--blue-light]"
    },
  }

  getTextColor(resumeAtribute: string): string {
    return this.resume[resumeAtribute].iconColor;
  }

  getBgColor(resumeAtribute: string): string {
    return this.resume[resumeAtribute].bgColor;
  }



}
