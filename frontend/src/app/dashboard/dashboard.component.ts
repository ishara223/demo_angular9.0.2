import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { item } from  '../policy';
import { oneItem } from  '../policy';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items:item[];
  oneItem:oneItem[];
 
  selectedItem:  item  = { id: null,
                              name:  null,
                              size:  null,
                              price: null,
                              dicsription: null,
                              img: null};
  selectedOneItem:  oneItem  = { id: null,
                                name:  null,
                                size:  null,
                                price: null,
                                discription: null,
                                img: null};                            

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.readPolicies().subscribe((selectedItem: item[])=>{
      this.items = selectedItem;
      console.log(item);
    })
  }
  getItem(id:number): void {
    this.apiService.readoneItem(id).subscribe((selectedOneItem: oneItem[])=>{
      this.selectedOneItem = selectedOneItem[0];
      console.log(selectedOneItem);
    })
  }

}
