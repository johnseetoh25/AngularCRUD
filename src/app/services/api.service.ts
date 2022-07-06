import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModels } from '../models/data-models';
import { Observable } from 'rxjs';

const dbUrl = 'http://localhost:3000/dataList/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postData(data: any){
    return this.http.post<DataModels>("http://localhost:3000/dataList", data);
  }

  getData():Observable<any>{
    return this.http.get(dbUrl)
  }

  getOnebyID(id:number){
    return this.http.get<DataModels>("http://localhost:3000/dataList/"+id);
  }

  getDetails(id: number){
    return this.http.get<DataModels>("http://localhost:3000/dataList/"+id);
  }

  editData(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/dataList/"+id, data);
  }

  deleteData(id: number){
    return this.http.delete<any>("http://localhost:3000/dataList/"+id);
  }

  addDatabyID(id: number, data: any){
    return this.http.put<any>("http://localhost:3000/dataList/"+id, data);
  }

}
