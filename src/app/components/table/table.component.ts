import { Component, Input, OnInit } from '@angular/core';
import { OrderStatus } from 'src/app/models/orderstatus.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() datasource: any[] = [];
  @Input() columns: string[] = [];
  attributes: string[] = [];

  ngOnInit(): void {
    if (this.datasource.length > 0) {
      let treatedAttributes = Object.keys(this.datasource[0]);
      treatedAttributes.shift();
      this.attributes = treatedAttributes;
    }
  }

  getStatus(statusKey: string) {
    return OrderStatus[statusKey] || { title: 'Desconhecido', color: '#000000', background: '#FFFFFF' };
  }

}
