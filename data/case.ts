import data from './data/case.json';
import { Case } from '../models/Case';

export function getCases(): Case[] {
  return data as Case[];
}
