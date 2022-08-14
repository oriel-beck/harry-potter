import { Component, Input } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-house-details-list',
  templateUrl: './house-details-list.component.html',
  styleUrls: ['./house-details-list.component.css'],
})
export class HouseDetailsListComponent {
  @Input() house!: House;
}
