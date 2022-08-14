import { Component, Input, OnInit } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  @Input() house!: House;

  ngOnInit() {
    this.house = setImageToHouse(this.house);
  }
}

function setImageToHouse(house: House) {
  switch (house.name) {
    case 'Gryffindor':
      house.image =
        'https://static.wikia.nocookie.net/harrypotter/images/9/98/Gryffindor.jpg';
      break;
    case 'Ravenclaw':
      house.image =
        'https://static.wikia.nocookie.net/harrypotter/images/3/3c/RavenclawCrest.jpg';
      break;
    case 'Hufflepuff':
      house.image =
        'https://static.wikia.nocookie.net/harrypotter/images/e/e4/Hufflepuff.jpg';
      break;
    case 'Slytherin':
      house.image =
        'https://static.wikia.nocookie.net/harrypotter/images/6/6e/Slytherin.jpg';
  }
  return house;
}
