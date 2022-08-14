export interface Student {
  name: string;
  alternate_name: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColor: string;
  hairColor: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export interface Wand {
  wood: string;
  core: string;
  length: number | string;
}
