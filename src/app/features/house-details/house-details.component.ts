import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, find, from, map, mergeMap, Observable, of, tap } from 'rxjs';
import { House } from '../../models/house.model';
import { WizardWorldService } from '../../services/wizard-world.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent {
  house$: Observable<House> = of({} as House);
  constructor(private router: ActivatedRoute) {
    this.house$ = this.router.data.pipe(
      map(
        (data) =>
          (data as { houses: House[] }).houses.find(
            (house: House) =>
              house.name === this.router.snapshot.paramMap.get('house')
          )!
      )
    );
  }
}
