import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModels } from '../models/data-models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-approval-page',
  templateUrl: './approval-page.component.html',
  styleUrls: ['./approval-page.component.css']
})
export class ApprovalPageComponent implements OnInit {

  dataEditForm !: FormGroup;
  dataModel!: DataModels;
  dataList!:any;
  id:any;

  constructor(
    private formBuilder: FormBuilder,
    public api: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getCrudDatabyID(this.route.snapshot.params['id']);
    this.dataEditForm = this.formBuilder.group({
      name : new FormControl(''),
      family_details: this.formBuilder.array([]),
      house: new FormControl(''),
    });
  }

  getCrudDatabyID(id: any){
    this.api.getOnebyID(id)
    .subscribe((data:any)=>{
      this.id = data.id;
      this.dataList = data;
      //console.log(data);

      this.dataList.family_details.map((familyDetail: any)=>{
        const familyForm = this.formBuilder.group({
          familymember: familyDetail.familymember,
          familyrelationship: familyDetail.familyrelationship,
        });
        this.familyDetails.push(familyForm);
      });

      this.dataEditForm.patchValue({
        name: data.name,
        house: data.house,
      });

      console.log(this.dataEditForm.value);
    });
  }

  // array data for sub-data
  get familyDetails(): FormArray{
    return this.dataEditForm.get('family_details') as FormArray;
  }

  // add or delete Rows
  addFamilyDetail(){
    this.familyDetails.push(
      this.formBuilder.group({
        familymember: [''],
        familyrelationship: [''],
      }),
    );
  }

  deleteFamilyDetail(x: number){
    this.familyDetails.removeAt(x);
  }


}
