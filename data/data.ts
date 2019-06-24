import cases from './case.json';
import { Case } from '../models/Case.js';

interface Data {
  cases: Case[];
}

export const data: Data = {
  cases: cases as Case[],
};

export function getCases(): Case[] {
  return data.cases;
}
