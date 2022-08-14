import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css'],
})
export class SubHeaderComponent {
  @Input() navigateTo: string = '';
  house$?: Observable<string>;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.house$ = this.route.paramMap.pipe(
      switchMap((params) => of(params.get('house')!))
    );
  }

  navigateToStudents() {
    this.router.navigate([
      this.route.snapshot.paramMap.get('house'),
      this.navigateTo,
    ]);
  }

  navigateToMainPage() {
    this.router.navigate(['']);
  }

  toTitle = toTitle.bind(this);
}

const toTitle = (string: string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();
