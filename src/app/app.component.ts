import {Component} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {Direction} from './models/direction.enum';
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  private readonly DARK_COLOR_HEADER_ROUTES = ['/new-trip']
  scroll$: Observable<Direction>;
  darkColor$: Observable<boolean>

  constructor(private router: Router) {
    this.scroll$= fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );
    this.darkColor$ = router.events.pipe(
      filter(e  => {return (e instanceof NavigationStart);}),
      map( e => {console.log(e);return this.DARK_COLOR_HEADER_ROUTES.includes((e as NavigationStart).url)})
    )
  }



}
