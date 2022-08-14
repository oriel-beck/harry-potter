import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { WizardWorldService } from '../services/wizard-world.service';
import { Observable } from 'rxjs';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root',
})
export class HouseResolverService implements Resolve<Observable<House[]>> {
  constructor(private houseService: WizardWorldService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.houseService.getHouses();
  }
}
