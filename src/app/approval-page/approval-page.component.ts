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

  doneApproved = false;

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
      address: new FormControl(''),
    });

    this.dataEditForm.get("house")?.disable();
    this.dataEditForm.get("address")?.disable();
  }

  getCrudDatabyID(id: any){
    this.api.getOnebyID(id)
    .subscribe((data:any)=>{
      this.id = data.id;
      this.dataList = data;
      //console.log(data);

      this.dataEditForm.patchValue({
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

      // lock elements when which form done fill in
      if (!data.house) {
        unlockElement(this.dataEditForm);
      }else{
        lockElement(this.dataEditForm);
      }

      this.dataEditForm.valueChanges.subscribe((data)=>{
        if(!data.house){
          this.doneApproved = this.dataEditForm.disabled;
        }else{
          this.doneApproved = this.dataEditForm.valid;
        }
      });

      // get or display the original value was filled in
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

function lockElement(element: FormControl | FormGroup ) {
  if (element.enabled) {
    element.disable({ emitEvent: false });

    if (element instanceof FormControl) {
      element.reset(null, { emitEvent: false });
    }
  }
}

function unlockElement(element: FormControl | FormGroup) {
  if (element.disabled) {
    element.enable({ emitEvent: false });

    if (element instanceof FormControl) {
      element.reset(null, { emitEvent: false });
    }
  }
}

