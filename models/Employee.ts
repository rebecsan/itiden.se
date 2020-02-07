import { Media } from './Media';

export interface Employee {
  id: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  avatar?: Media;
}
