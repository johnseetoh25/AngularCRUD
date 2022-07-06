import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-data-page',
  templateUrl: './add-data-page.component.html',
  styleUrls: ['./add-data-page.component.css']
})
export class AddDataPageComponent implements OnInit {

  dataAddForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.dataAddForm = this.formBuilder.group({
      name : [''],
      family_details: this.formBuilder.array([this.formBuilder.group({
          familymember: [''],
          familyrelationship: [''],
        })
      ]),
    })
  }

  // after clicked save button and alert result
  addingData(){
    if (this.dataAddForm.valid) {
      this.api.postData(this.dataAddForm.value)
      .subscribe({
        next:(res)=>{
          alert("Crud Data added successfully")
        },
        error:()=>{
          alert("Error while adding the crud data")
        }
      })
    }
  }

  // array data for sub-data
  get familyDetails(){
    return this.dataAddForm.get('family_details') as FormArray;
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
