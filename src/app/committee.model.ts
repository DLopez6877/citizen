import { Legislator } from './legislator.model';

export class Committee {
  members: Legislator[] = [];
  subcommittees: string[] = [];
  constructor(public id: string, public name: string, public chair: string) { }
}
