import { Document } from '@contentful/rich-text-types';
import { Media } from './Media';
import { Partner } from './Partner';

export interface Case {
  id: string;
  title: string;
  slug: string;
  description: Document;
  url: string;
  media: Media[];
  desktopMedia: Media[];
  mobileMedia: Media[];
  partners: Partner[];
  technologies: string[];
  categories: string[];
  publishedAt: string;
  showOnStartpage: boolean;
  labs: boolean;
}
