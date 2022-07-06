import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { DataModels } from '../models/data-models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'family_detail', 'house', 'action'];
  dataListOut!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(){
    this.api.getData()
    .subscribe((data)=>{
        console.log(data);
        this.dataListOut = new MatTableDataSource(data);
        this.dataListOut.paginator = this.paginator;
        this.dataListOut.sort = this.sort;
      },
    );
  }

  openEditPage(row: any){
    this.router.navigate(['edit-data-page', row]);
  }

  openDetailPage(row: any){
    this.router.navigate(['detail-data-page', row]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListOut.filter = filterValue.trim().toLowerCase();

    if (this.dataListOut.paginator) {
      this.dataListOut.paginator.firstPage();
    }
  }

}
