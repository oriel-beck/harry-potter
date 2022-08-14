import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses.component';
import { HouseModule } from '../../components/house/house.module';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HouseDetailsComponent } from '../house-details/house-details.component';
import { HouseDetailsModule } from '../house-details/house-details.module';
import { StudentsComponent } from '../students/students.component';
import { StudentsModule } from '../students/students.module';
import { HouseResolverService } from '../../resolvers/house-resolver.service';
import { SubHeaderModule } from '../../components/sub-header/sub-header.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    HouseModule,
    HouseDetailsModule,
    StudentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HousesComponent,
        children: [
          {
            path: ':house/students',
            component: StudentsComponent,
          },
          {
            path: ':house/info',
            component: HouseDetailsComponent,
            resolve: {
              houses: HouseResolverService,
            },
          },
        ],
      },
    ]),
    SubHeaderModule,
  ],
  declarations: [HousesComponent],
  exports: [HousesComponent],
})
export class HousesModule {}
