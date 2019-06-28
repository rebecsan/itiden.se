import { Case } from "../models";

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}

declare module "case.json" {
  const value: Case[];
  export default value;
}