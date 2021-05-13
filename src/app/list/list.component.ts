import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListServiceService } from './list-service.service'
 
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Array<any>

  constructor(private listService: ListServiceService) { 
    this.list = [];
  }

  test() {
    return console.log('test')
  }

  getList(): void {
    this.listService.getList()
    .subscribe(list => this.list = list);
  }

  ngOnInit(): void {
    this.test()
    this.getList()
  }


}
