export interface DataModels {
  _id: any;
  name: any;
  family_details: FamilyDetail[];
  house: any;
  address: any;
}

export interface FamilyDetail{
  familymember: any;
  familyrelationship: any;
}
