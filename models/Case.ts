import { Document } from '@contentful/rich-text-types';
import { Media } from './Media';
import { Partner } from './Partner';

export interface Case {
  title: string;
  slug: string;
  description: Document;
  url: string;
  media: Media[];
  partners: Partner[];
  technologies: string[];
}
