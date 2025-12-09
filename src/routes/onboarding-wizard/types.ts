export interface EmailStepData {
  email: string;
}

export interface PersonalDetailsStepData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface HomeAddressStepData {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
}
