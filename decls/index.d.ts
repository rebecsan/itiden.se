import { Case, Menu } from "../models";

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

declare module "menu.json" {
  const value: Menu;
  export default value;
}