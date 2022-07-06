export interface DataModels {
  [x: string]: any;
  _id: any;
  name: any;
  family_details: FamilyDetail[];
  house: any;
}

export interface FamilyDetail{
  familymember: any;
  familyrelationship: any;
}
