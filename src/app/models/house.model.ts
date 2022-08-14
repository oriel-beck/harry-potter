import { Trait } from './trait.model';

export interface House {
  id: string;
  name: string;
  houseColours?: string;
  founder?: string;
  animal?: string;
  element?: string;
  ghost?: string;
  commonRoom?: string;
  image: string;
  heads: HouseHead[];
  traits: Trait[];
}

export interface HouseHead {
  id: string;
  firstName?: string;
  lastName?: string;
}
