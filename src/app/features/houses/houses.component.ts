import { Component, OnInit } from '@angular/core';
import { WizardWorldService } from '../../services/wizard-world.service';
import { House } from '../../models/house.model';
import { Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css'],
})
export class HousesComponent implements OnInit {
  houses$: Observable<House[]> = of([]);
  constructor(private houseService: WizardWorldService) {}

  ngOnInit(): void {
    this.houses$ = this.houseService.getHouses();
  }
}
