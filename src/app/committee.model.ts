import { Legislator } from './legislator.model';

export class Committee {
  constructor(public name: string, public description: string, public members: Legislator[]) { }
}
