export const STEP_EMAIL = "email" as const;
export const STEP_PERSONAL_DETAILS = "personalDetails" as const;
export const STEP_REVIEW = "review" as const;

export type StepKey =
  | typeof STEP_EMAIL
  | typeof STEP_PERSONAL_DETAILS
  | typeof STEP_REVIEW;

export const STEP_MODE_CREATE = "create" as const;
export const STEP_MODE_EDIT = "edit" as const;
export const STEP_MODE_DUPLICATE = "duplicate" as const;

export type StepMode = typeof STEP_MODE_CREATE | typeof STEP_MODE_EDIT;
