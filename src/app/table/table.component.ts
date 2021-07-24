import { Component, OnInit, Input } from '@angular/core';

type FormattedAddress = {
  address:string;
  district:string;
  state:string;
  zipcode:string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {

@Input() addresses!: string[];
formattedAdddress: FormattedAddress[] = [];
  constructor() {
  }
  

  ngOnInit(): void {
  console.log(this.addresses);
  for(let address of this.addresses) {
    const ad_split = address.split(',');
    const n = ad_split.length;
    const addr = ad_split.slice(0, n-2).join(',');
    const district = ad_split[n-2];
    const state = ad_split[n-1].split('-')[0];
    const zip = ad_split[n-1].split('-')[1];
    this.formattedAdddress.push({
      address:addr,
      district:district,
      state:state,
      zipcode:zip
    });
  }
  console.log(this.formattedAdddress);
  

  }

}
