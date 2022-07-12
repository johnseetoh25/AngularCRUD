import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DataModels } from '../models/data-models';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail-data-page',
  templateUrl: './detail-data-page.component.html',
  styleUrls: ['./detail-data-page.component.css']
})
export class DetailDataPageComponent implements OnInit {

  id!: number;
  dataList!:any;

  crudData!: DataModels;
  addMoreForm !: FormGroup;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.api.getDetails(this.id)
    .subscribe(data=>{
      console.log(data)
      this.crudData = data;
    });

    // adding more data
    this.addMoreByID(this.route.snapshot.params['id']);
    this.addMoreForm = this.formBuilder.group({
      name : new FormControl(''),
      family_details: this.formBuilder.array([]),
      // add more data for the form field
      house: new FormControl(''),
      address: new FormControl(''),
    });

  }

  addMoreByID(id: any){
    this.api.getOnebyID(id)
    .subscribe((data: any)=>{
      this.id = data.id;
      this.dataList = data;

      this.addMoreForm.patchValue({
        name: data.name,
        house: data.house,
        address: data.address,
      });

      this.dataList.family_details.map((familyDetail: any)=>{
        const familyForm = this.formBuilder.group({
          familymember: familyDetail.familymember,
          familyrelationship: familyDetail.familyrelationship,
        });
        this.familyDetails.push(familyForm);
      });

      console.log(this.addMoreForm.value);
    });
  }

  addingMoreData(){
    this.api.editData(this.addMoreForm.value, this.id)
    .subscribe((res)=>{
      const id = res.id;
      alert("Crud updated Successfully");
    },()=>{
      alert("Error while updating the record");
    });
  }

  get familyDetails(): FormArray{
    return this.addMoreForm.get('family_details') as FormArray;
  }

}
