import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataModels } from '../models/data-models';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edit-data-page',
  templateUrl: './edit-data-page.component.html',
  styleUrls: ['./edit-data-page.component.css']
})
export class EditDataPageComponent implements OnInit {

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
      });

      console.log(this.dataEditForm.value);
    });
  }

  submitEditedCrudData(){
    this.api.editData(this.dataEditForm.value, this.id)
    .subscribe((res)=>{
      const id = res.id;
      alert("Crud updated Successfully");
    },()=>{
      alert("Error while updating the record");
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


