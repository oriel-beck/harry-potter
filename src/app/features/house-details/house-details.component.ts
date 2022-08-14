import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, from, mergeMap, Observable, of } from 'rxjs';
import { House } from '../../models/house.model';
import { WizardWorldService } from '../../services/wizard-world.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent {
  house$: Observable<House> = of({} as House);
  constructor(
    private router: ActivatedRoute,
    private houseService: WizardWorldService
  ) {
    this.house$ = this.houseService.getHouses().pipe(
      mergeMap((items) => from(items)),
      filter((item) => item.name === this.router.snapshot.paramMap.get('house'))
    );
  }
}
