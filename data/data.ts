import cases from './case.json';
import pages from './page.json';
import { Case } from '../models/Case.js';
import { Page } from '../models/Page.js';

export function getCases(): Case[] {
  return cases as Case[];
}

export function getPages(): Page[] {
  return pages as Page[];
}
export function getPage(slug: string): Page | undefined {
  return getPages().find(page => page.slug === slug);
}
