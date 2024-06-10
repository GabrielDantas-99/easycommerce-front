import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() datasource: any[] = [];
  @Input() columns: string[] = [];
  atributes: string[] = [];

  ngOnInit(): void {
    if (this.datasource.length > 0) {
      let treatedAttributes = Object.keys(this.datasource[0]);
      treatedAttributes.shift();
      this.atributes = treatedAttributes;
    }
  }

}
