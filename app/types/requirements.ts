export type RequirementType =
  | "App Development"
  | "Business Application"
  | "Business Software"
  | "CRM / Lead Management"
  | "CRM System"
  | "Automation"
  | "Cloud / DevOps"
  | "Cloud Infrastructure"
  | "API Integration"
  | "Other";

export type RequirementSubmission = {
  _id?: string;
  name: string;
  phone?: string;
  email: string;
  requirementType: RequirementType;
  message: string;
  status: "new" | "reviewed";
  createdAt: string;
};
