import { Legislator } from './legislator.model';
import { Committee } from './committee.model';

export class Bill {
  constructor(public name: string, public description: string, public sponsor: Legislator, public committee: Committee, public dateIntroduced: Date, public link: string) { }
}
